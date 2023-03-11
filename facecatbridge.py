# -*- coding:utf-8 -*-
#! python3

# FaceCat-Python(OpenSource)
#Shanghai JuanJuanMao Information Technology Co., Ltd 

import win32gui
import win32api
from win32con import *
import math
import time
import datetime
from operator import attrgetter
from ctypes import *
import os
#https://aka.ms/vs/16/release/VC_redist.x64.exe

#调用facecatbridge的DLL
class FaceCatBridge(object):
	def __init__(self):
		self.m_bridge = None #桥接对象
		self.m_encoding = "gbk" #解析编码
	#初始化
	def init(self):
		current_file_path = __file__
		current_file_dir = os.path.dirname(current_file_path)
		self.m_bridge = cdll.LoadLibrary(current_file_dir + r"\\facecatbridge.dll")
		cdll.argtypes = [c_char_p, c_int, c_float, c_double, c_long, c_wchar_p]
	#创建浏览器
	def createWebView(self, hWnd, url):
		return self.m_bridge.createWebView(c_int(hWnd), c_char_p(url.encode(self.m_encoding)), 1)
	#改变大小
	def resizeWebView(self, hWnd):
		return self.m_bridge.resizeWebView(c_int(hWnd))
	#获取返回的文本
	def getCacheText(self):
		recvData = create_string_buffer(102400)
		if(self.m_bridge.getCacheText(recvData) > 0):
			return str(recvData.value, encoding=self.m_encoding)
		else:
			return ""
	#调用JavaScript
	def executeScript(self, script):
		return self.m_bridge.executeScript(c_char_p(script.encode(self.m_encoding)))
