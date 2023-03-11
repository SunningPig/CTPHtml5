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
	while (ctp.hasNewDatas()):
		recvData = create_string_buffer(102400)
		if (ctp.getDepthMarketData(recvData) > 0):
			data = str(recvData.value, encoding="gbk")
			m_bridge.executeScript("onSecurityLatestDataCallBack(\"" + data + "\")");
			continue
		if (ctp.getAccountData(recvData) > 0):
			data = str(recvData.value, encoding="gbk")
			m_bridge.executeScript("onAccountDataCallBack(\"" + data + "\")");
			continue
		if (ctp.getOrderInfo(recvData) > 0):
			data = str(recvData.value, encoding="gbk")
			m_bridge.executeScript("onOrderInfoCallBack(\"" + data + "\")");
			continue
		if (ctp.getTradeRecord(recvData) > 0):
			data = str(recvData.value, encoding="gbk")
			m_bridge.executeScript("onTradeRecordCallBack(\"" + data + "\")");
			continue
		if (ctp.getPositionData(recvData) > 0):
			data = str(recvData.value, encoding="gbk")
			m_bridge.executeScript("onInvestorPositionCallBack(\"" + data + "\")");
			continue
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
	ctp.m_ctpID = ctp.create()
	reqID = ctp.generateReqID()
	# 启动CTP交易和行情
	ctp.start(reqID, "simnow_client_test", "0000000000000000", "180.168.146.187:10212", "180.168.146.187:10202", "9999", "021739", "123456")
	# 检查是否登陆成功
	while (ctp.isDataOk() <= 0):
		time.sleep(1)
	print("登陆CTP成功!")
	recvData = create_string_buffer(1024 * 1024 * 10)
	if (ctp.getInstrumentsData(recvData) > 0):
		data = str(recvData.value, encoding="gbk")
		m_bridge.executeScript("onSecurityCallBack(\"" + data + "\");");
	recvData = create_string_buffer(1024 * 1024 * 10)
	if (ctp.getOrderInfos(recvData) > 0):
		data = str(recvData.value, encoding="gbk")
		m_bridge.executeScript("onOrderInfosCallBack(\"" + data + "\");");
	recvData = create_string_buffer(1024 * 1024 * 10)
	if (ctp.getTradeRecords(recvData) > 0):
		data = str(recvData.value, encoding="gbk")
		m_bridge.executeScript("onTradeRecordsCallBack(\"" + data + "\");");
	# 注册行情
	reqID = ctp.generateReqID()
	ctp.subMarketDatas(reqID, "cu2303,cu2304,cu2305,rb2303,rb2304,ru2303,ru2304,ru2305,IF2303,IF2304,IF2305")
	timer.set_timer(1, checkCTPData)

m_bridge = FaceCatBridge()
m_bridge.init()
m_runCTP = FALSE

#消息循环
def WndProc(hwnd,msg,wParam,lParam):
	if msg == WM_DESTROY:
		os._exit(0)
		win32gui.PostQuitMessage(0)
	if msg == WM_SIZE:
		global m_bridge
		m_bridge.resizeWebView(hwnd)
	elif msg == 0x0401:
		while(1 == 1):
			text = m_bridge.getCacheText()
			if(len(text) == 0):
				break
			else:
				strs = text.replace("\"", "").split(',')
				if(strs[0] == "bidopen"):
					ctp.bidOpen(ctp.generateReqID(), strs[1], strs[2], float(strs[3]), int(strs[4]), 51, "")
				elif(strs[0] == "bidclosetoday"):
					ctp.bidCloseToday(ctp.generateReqID(), strs[1], strs[2], float(strs[3]), int(strs[4]), 51, "")
				elif(strs[0] == "bidclose"):
					ctp.bidClose(ctp.generateReqID(), strs[1], strs[2], float(strs[3]), int(strs[4]), 51, "")
				elif(strs[0] == "askopen"):
					ctp.askOpen(ctp.generateReqID(), strs[1], strs[2], float(strs[3]), int(strs[4]), 51, "")
				elif(strs[0] == "askclosetoday"):
					ctp.askCloseToday(ctp.generateReqID(), strs[1], strs[2], float(strs[3]), int(strs[4]), 51, "")
				elif(strs[0] == "askclose"):
					ctp.askClose(ctp.generateReqID(), strs[1], strs[2], float(strs[3]), int(strs[4]), 51, "")
				elif(strs[0] == "cancelorder"):
					print(strs[1])
					print(strs[2])
					ctp.cancelOrder(ctp.generateReqID(), strs[1], strs[2], "")
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
current_file_path = __file__
current_file_dir = os.path.dirname(current_file_path)
m_bridge.createWebView(hwnd, current_file_dir + r"\\future.html")
win32gui.PumpMessages()
