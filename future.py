# -*- coding:utf-8 -*-
#! python3

# FaceCat-Python(OpenSource)
#Shanghai JuanJuanMao Information Technology Co., Ltd 

import win32gui
import win32api
from win32con import *
import math
import time
import pyctp
from ctypes import *
import struct
import os
import timer
from facecatbridge import *
import facecatbridge

		
ctp = None #ctp

#检查CTP的数据
def checkCTPData(a='', b=''):
	global ctp
	global m_bridge
	#检查是否有最新的数据
	while (ctp.hasNewDatas()):
		recvData = create_string_buffer(102400)
		#接收最新行情
		if (ctp.getDepthMarketData(recvData) > 0):
			data = str(recvData.value, encoding="gbk")
			m_bridge.executeScript("onSecurityLatestDataCallBack(\"" + data + "\")");
			continue
		#接收资金数据
		if (ctp.getAccountData(recvData) > 0):
			data = str(recvData.value, encoding="gbk")
			m_bridge.executeScript("onAccountDataCallBack(\"" + data + "\")");
			continue
		#接收委托回报
		if (ctp.getOrderInfo(recvData) > 0):
			data = str(recvData.value, encoding="gbk")
			m_bridge.executeScript("onOrderInfoCallBack(\"" + data + "\")");
			continue
		#接收成交回报
		if (ctp.getTradeRecord(recvData) > 0):
			data = str(recvData.value, encoding="gbk")
			m_bridge.executeScript("onTradeRecordCallBack(\"" + data + "\")");
			continue
		#接收持仓
		if (ctp.getPositionData(recvData) > 0):
			data = str(recvData.value, encoding="gbk")
			m_bridge.executeScript("onInvestorPositionCallBack(\"" + data + "\")");
			continue
		#接收持仓明细
		if (ctp.getPositionDetailData(recvData) > 0):
			data = str(recvData.value, encoding="gbk")
			m_bridge.executeScript("onInvestorPositionDetailCallBack(\"" + data + "\")");
			continue
		break

#启动CTP
def runCTP():
	global ctp
	global m_bridge
	ctp = pyctp.CTPDLL()
	ctp.init()
	#创建CTP实例
	ctp.m_ctpID = ctp.create()
	#创建请求ID
	reqID = ctp.generateReqID()
	# 启动CTP交易和行情
	ctp.start(reqID, "simnow_client_test", "0000000000000000", "180.168.146.187:10212", "180.168.146.187:10202", "9999", "021739", "123456")
	# 检查是否登陆成功
	while (ctp.isDataOk() <= 0):
		time.sleep(1)
	print("登陆CTP成功!")
	#接收码表
	recvData = create_string_buffer(1024 * 1024 * 10)
	if (ctp.getInstrumentsData(recvData) > 0):
		data = str(recvData.value, encoding="gbk")
		m_bridge.executeScript("onSecurityCallBack(\"" + data + "\");");
	recvData = create_string_buffer(1024 * 1024 * 10)
	#接收委托回报历史
	if (ctp.getOrderInfos(recvData) > 0):
		data = str(recvData.value, encoding="gbk")
		m_bridge.executeScript("onOrderInfosCallBack(\"" + data + "\");");
	#接收成交回报历史
	recvData = create_string_buffer(1024 * 1024 * 10)
	if (ctp.getTradeRecords(recvData) > 0):
		data = str(recvData.value, encoding="gbk")
		m_bridge.executeScript("onTradeRecordsCallBack(\"" + data + "\");");
	# 注册行情
	reqID = ctp.generateReqID()
	ctp.subMarketDatas(reqID, "cu2303,cu2304,cu2305,rb2303,rb2304,ru2303,ru2304,ru2305,IF2303,IF2304,IF2305")
	#启动秒表
	timer.set_timer(1, checkCTPData)

#创建桥接
m_bridge = FaceCatBridge()
m_bridge.init()
m_runCTP = FALSE

#消息循环
def WndProc(hwnd,msg,wParam,lParam):
	if msg == WM_DESTROY:
		os._exit(0)
		win32gui.PostQuitMessage(0)
	#尺寸改变
	if msg == WM_SIZE:
		global m_bridge
		m_bridge.resizeWebView(hwnd)
	#接收自定义消息
	elif msg == 0x0401:
		while(1 == 1):
			text = m_bridge.getCacheText()
			if(len(text) == 0):
				break
			else:
				strs = text.replace("\"", "").split(',')
				#买开
				if(strs[0] == "bidopen"):
					ctp.bidOpen(ctp.generateReqID(), strs[1], strs[2], float(strs[3]), int(strs[4]), 51, "")
				#买平今
				elif(strs[0] == "bidclosetoday"):
					ctp.bidCloseToday(ctp.generateReqID(), strs[1], strs[2], float(strs[3]), int(strs[4]), 51, "")
				#买平
				elif(strs[0] == "bidclose"):
					ctp.bidClose(ctp.generateReqID(), strs[1], strs[2], float(strs[3]), int(strs[4]), 51, "")
				#卖开
				elif(strs[0] == "askopen"):
					ctp.askOpen(ctp.generateReqID(), strs[1], strs[2], float(strs[3]), int(strs[4]), 51, "")
				#卖平今
				elif(strs[0] == "askclosetoday"):
					ctp.askCloseToday(ctp.generateReqID(), strs[1], strs[2], float(strs[3]), int(strs[4]), 51, "")
				#卖平
				elif(strs[0] == "askclose"):
					ctp.askClose(ctp.generateReqID(), strs[1], strs[2], float(strs[3]), int(strs[4]), 51, "")
				#撤单
				elif(strs[0] == "cancelorder"):
					print(strs[1])
					print(strs[2])
					ctp.cancelOrder(ctp.generateReqID(), strs[1], strs[2], "")
	#webview创建完成回调
	elif msg == 0x0402:
		print("navigateok")
		global m_runCTP
		if(m_runCTP == FALSE):
			m_runCTP = TRUE
			runCTP()
	return win32gui.DefWindowProc(hwnd,msg,wParam,lParam)
	
#创建窗体
wc = win32gui.WNDCLASS()
wc.hbrBackground = COLOR_BTNFACE + 1
wc.hCursor = win32gui.LoadCursor(0,IDI_APPLICATION)
wc.lpszClassName = "facecat-py"
wc.lpfnWndProc = WndProc
wc.style = CS_HREDRAW | CS_VREDRAW | CS_DBLCLKS
reg = win32gui.RegisterClass(wc)
hwnd = win32gui.CreateWindow(reg,'facecat-py',WS_OVERLAPPEDWINDOW | WS_CLIPCHILDREN,CW_USEDEFAULT,CW_USEDEFAULT,CW_USEDEFAULT,CW_USEDEFAULT,0,0,0,None)

win32gui.ShowWindow(hwnd,SW_SHOWNORMAL)
win32gui.UpdateWindow(hwnd)
#获取启动路径
current_file_path = __file__
current_file_dir = os.path.dirname(current_file_path)
#创建webview
m_bridge.createWebView(hwnd, current_file_dir + r"\\future.html")
win32gui.PumpMessages()
