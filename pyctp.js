//资金账号
function AccountData() {
    // 投资者帐号
	this.accountID = "";
    // 可用资金
	this.available = 0;
    // 期货结算准备金
	this.balance = 0;
    // 经纪公司代码
	this.brokerID = "";
    // 资金差额
	this.cashIn = 0;
    // 平仓盈亏
	this.closeProfit = 0;
    // 手续费
	this.commission = 0;
    // 信用额度
	this.credit = 0;
    // 币种代码
	this.currencyID = "";
    // 当前保证金总额
	this.currMargin = 0;
    // 投资者交割保证金
	this.deliveryMargin = 0;
    // 入金金额
	this.deposit = 0;
    // 动态权益(新增)
	this.dynamicBalance = 0;
    // 交易所交割保证金
	this.exchangeDeliveryMargin = 0;
    // 交易所保证金
	this.exchangeMargin = 0;
    // 浮动盈亏
	this.floatProfit = 0;
    // 冻结的资金
	this.frozenCash = 0;
    // 冻结的手续费
	this.frozenCommission = 0;
    // 冻结的保证金
	this.frozenMargin = 0;
    // 货币质押余额
	this.fundMortgageAvailable = 0;
    // 货币质入金额
	this.fundMortgageIn = 0;
    // 货币质出金额
	this.fundMortgageOut = 0;
    // 利息收入
	this.interest = 0;
    // 利息基数
	this.interestBase = 0;
    // 质押金额
	this.mortgage = 0;
    // 可质押货币金额
	this.mortgageableFund = 0;
    // 持仓盈亏
	this.positionProfit = 0;
    // 上次结算准备金
	this.preBalance = 0;
    // 上次信用额度
	this.preCredit = 0;
    // 上次存款额
	this.preDeposit = 0;
    // 上次货币质入金额
	this.preFundMortgageIn = 0;
    // 上次货币质出金额
	this.preFundMortgageOut = 0;
    // 上次占用的保证金
	this.preMargin = 0;
    // 上次质押金额
	this.preMortgage = 0;
    // 基本准备金
	this.reserve = 0;
    // 保底期货结算准备金
	this.reserveBalance = 0;
    // 风险度(新增)
	this.risk = 0;
    // 结算编号
	this.settlementID = 0;
    // 特殊产品平仓盈亏
	this.specProductCloseProfit = 0;
    // 特殊产品手续费
	this.specProductCommission = 0;
    // 特殊产品交易所保证金
	this.specProductExchangeMargin = 0;
    // 特殊产品冻结手续费
	this.specProductFrozenCommission = 0;
    // 特殊产品冻结保证金
	this.specProductFrozenMargin = 0;
    // 特殊产品占用保证金
	this.specProductMargin = 0;
    // 特殊产品持仓盈亏
	this.specProductPositionProfit = 0;
    // 根据持仓盈亏算法计算的特殊产品持仓盈亏
	this.specProductPositionProfitByAlg = 0;
    // 交易日
	this.tradingDay = "";
    // 出金金额
	this.withdraw = 0;
    // 可取资金
	this.withdrawQuota = 0;
};

//码表
function Security() {
	// 组合类型
	this.combinationType = "";
	// 创建日
	this.createDate = "";
	// 交割月
	this.deliveryMonth = 0;
	// 交割年份
	this.deliveryYear = 0;
	// 结束交割日
	this.endDelivDate = "";
	// 交易所代码
	this.exchangeID = "";
	// 合约在交易所的代码
	this.exchangeInstID = "";
	// 到期日
	this.expireDate = "";
	// 保留小数位数
	this.digit = 0;
	// 合约生命周期状态
	this.instLifePhase = "";
	// 合约代码
	this.instrumentID = "";
	// 合约名称
	this.instrumentName = "";
	// 当前是否交易
	this.isTrading = "";
	// 多头保证金率
	this.longMarginRatio = 0;
	// 限价单最大下单量
	this.maxLimitOrderVolume = 0;
	// 是否使用大额单边保证金算法
	this.maxMarginSideAlgorithm = "";
	// 市价单最大下单量
	this.maxMarketOrderVolume = 0;
	// 限价单最小下单量
	this.minLimitOrderVolume = 0;
	// 市价单最小下单量
	this.minMarketOrderVolume = 0;
	// 上市日
	this.openDate = "";
	// 期权类型
	this.optionsType = "";
	// 持仓日期类型
	this.positionDateType = "";
	// 持仓类型
	this.positionType = "";
	// 最小变动价位
	this.priceTick = 0;
	// 产品类型
	this.productClass = "";
	// 产品代码
	this.productID = "";
	// 空头保证金率
	this.shortMarginRatio = 0;
	// 开始交割日
	this.startDelivDate = "";
	// 执行价
	this.strikePrice = 0;
	// 基础商品代码
	this.underlyingInstrID = "";
	// 基础商品名称
	this.underlyingInstrName = "";
	// 合约基础商品乘数
	this.underlyingMultiple = 0;
	// 合约数量乘数
	this.volumeMultiple = 0;
};

//持仓
function InvestorPosition() {
	// 放弃执行冻结
	this.abandonFrozen = 0;
	// 经纪公司代码
	this.brokerID = "";
	// 资金差额
	this.cashIn = 0;
	// 平仓金额
	this.closeAmount = 0;
	// 平仓盈亏
	this.closeProfit = 0;
	// 逐日盯市平仓盈亏
	this.closeProfitByDate = 0;
	// 逐笔对冲平仓盈亏
	this.closeProfitByTrade = 0;
	// 平仓量
	this.closeVolume = 0;
	// 合约代码
	this.code = "";
	// 组合多头冻结
	this.combLongFrozen = 0;
	// 组合成交形成的持仓
	this.combPosition = 0;
	// 组合空头冻结
	this.combShortFrozen = 0;
	// 手续费
	this.commission = 0;
	// 交易所保证金
	this.exchangeMargin = 0;
	// 浮动盈亏
	this.floatProfit = 0;
	// 冻结的资金
	this.frozenCash = 0;
	// 冻结的手续费
	this.frozenCommission = 0;
	// 冻结的保证金
	this.frozenMargin = 0;
	// 投机套保标志
	this.hedgeFlag = "";
	// 投资者代码
	this.investorID = "";
	// 多头冻结
	this.longFrozen = 0;
	// 多头冻结金额
	this.longFrozenAmount = 0;
	// 保证金
	this.margin = 0;
	// 保证金率
	this.marginRateByMoney = 0;
	// 保证金率(按手数)
	this.marginRateByVolume = 0;
	// 开仓金额
	this.openAmount = 0;
	// 开仓成本
	this.openCost = 0;
	// 开仓价格
	this.openPrice = 0;
	// 开仓量
	this.openVolume = 0;
	// 今日持仓
	this.position = 0;
	// 持仓日期
	this.positionDate = "";
	// 持仓多空方向
	this.posiDirection = "";
	// 持仓成本
	this.positionCost = 0;
	// 持仓盈亏
	this.positionProfit = 0;
	// 上次占用的保证金
	this.preMargin = 0;
	// 上次结算价
	this.preSettlementPrice = 0;
	// 结算编号
	this.settlementID = 0;
	// 本次结算价
	this.settlementPrice = 0;
	// 空头冻结
	this.shortFrozen = 0;
	// 空头冻结金额
	this.shortFrozenAmount = 0;
	// 执行冻结
	this.strikeFrozen = 0;
	// 执行冻结金额
	this.strikeFrozenAmount = 0;
	// 今日持仓
	this.todayPosition = 0;
	// 交易日
	this.tradingDate = "";
	// 占用的保证金
	this.useMargin = 0;
	// 上日持仓
	this.ydPosition = 0;
};

//持仓明细
function InvestorPositionDetail() {
	// 经纪公司代码
	this.brokerID = "";
	// 平仓金额
	this.closeAmount = 0;
	// 平仓盈亏
	this.closeProfit = 0;
	// 逐日盯市持仓盈亏
	this.closeProfitByDate = 0;
	// 逐笔对冲持仓盈亏
	this.closeProfitByTrade = 0;
	// 平仓量
	this.closeVolume = 0;
	// 合约代码
	this.code = "";
	// 组合合约代码
	this.combInstrumentID = "";
	// 买卖
	this.direction = "";
	// 交易所代码
	this.exchangeID = "";
	// 交易所保证金
	this.exchMargin = 0;
	// 浮动盈亏
	this.floatProfit = 0;
	// 投机套保标志
	this.hedgeFlag = "";
	// 投资者代码
	this.investorID = "";
	// 昨收盘
	this.lastPrice = 0;
	// 昨结算价
	this.lastSettlementPrice = 0;
	// 投资者保证金
	this.margin = 0;
	// 保证金率
	this.marginRateByMoney = 0;
	// 保证金率(按手数)
	this.marginRateByVolume = 0;
	// 内部编号
	this.orderRef = "";
	// 开仓日期
	this.openDate = "";
	// 开仓价
	this.openPrice = 0;
	// 开仓量
	this.openVolume = 0;
	// 本地持仓号，服务器编写
	this.positionNo = "";
	// 持仓盈亏
	this.positionProfit = 0;
	// 逐日盯市持仓利润
	this.positionProfitByDate = 0;
	// 逐笔对冲持仓利润
	this.positionProfitByTrade = 0;
	// 持仓流号
	this.positionStreamId = 0;
	// 昨结算价
	this.preSettlementPrice = 0;
	// 持仓盈亏基准价
	this.profitBasePrice = 0;
	// 结算编号
	this.settlementID = 0;
	// 结算价
	this.settlementPrice = 0;
	// 成交日期
	this.tradingDay = "";
	// 成交编号
	this.tradeID = "";
	// 成交类型
	this.tradeType = "";
	// 数量
	this.volume = 0;
};

//委托回报
function OrderInfo() {
	// 激活时间
	this.activeTime = "";
	// 最后修改交易所交易员代码
	this.activeTraderID = "";
	// 操作用户代码
	this.activeUserID = "";
	// 经纪公司代码
	this.brokerID = "";
	// 经纪公司报单编号
	this.brokerOrderSeq = 0;
	// 业务单元
	this.businessUnit = "";
	// 撤销时间
	this.cancelTime = "";
	// 结算会员编号
	this.clearingPartID = "";
	// 客户代码
	this.clientID = "";
	// 合约代码
	this.code = "";
	// 组合投机套保标志
	this.combHedgeFlag = "";
	// 组合开平标志
	this.combOffsetFlag = "";
	// 触发条件
	this.contingentCondition = "";
	// 买卖方向
	this.direction = "";
	// 交易所代码
	this.exchangeID = "";
	// 合约在交易所的代码
	this.exchangeInstID = "";
	// 强平原因
	this.forceCloseReason = "";
	// 前置编号
	this.frontID = 0;
	// GTD日期
	this.gTDDate = "";
	// 价格
	this.limitPrice = 0;
	// 报单日期
	this.insertDate = "";
	// 委托时间
	this.insertTime = "";
	// 安装编号
	this.installID = "";
	// 投资者代码
	this.investorID = "";
	// 自动挂起标志
	this.isAutoSuspend = 0;
	// 互换单标志
	this.isSwapOrder = 0;
	// 最小成交量
	this.minVolume = 0;
	// 报单提示序号
	this.notifySequence = 0;
	// 本地报单编号
	this.orderLocalID = "";
	// 报单价格条件
	this.orderPriceType = "";
	// 报单引用
	this.orderRef = "";
	// 报单状态
	this.orderStatus = "";
	// 报单来源
	this.orderSource = "";
	// 报单提交状态
	this.orderSubmitStatus = "";
	// 报单编号
	this.orderSysID = "";
	// 报单类型
	this.orderType = "";
	// 会员代码
	this.participantID = "";
	// 相关报单
	this.relativeOrderSysID = "";
	// 请求编号
	this.requestID = 0;
	// 序号
	this.sequenceNo = 0;
	// 会话编号
	this.sessionID = 0;
	// 结算编号
	this.settlementID = 0;
	// 状态信息
	this.statusMsg = "";
	// 止损价
	this.stopPrice = 0;
	// 挂起时间
	this.suspendTime = "";
	// 有效期类型
	this.timeCondition = "";
	// 交易所交易员代码
	this.traderID = "";
	// 交易日
	this.tradingDay = "";
	// 最后修改时间
	this.updateTime = "";
	// 用户强评标志
	this.userForceClose = 0;
	// 用户代码
	this.userID = "";
	// 用户端产品信息
	this.userProductInfo = "";
	// 成交量类型
	this.volumeCondition = "";
	// 剩余数量
	this.volumeTotal = 0;
	// 数量
	this.volumeTotalOriginal = 0;
	// 今成交数量
	this.volumeTraded = 0;
	// 郑商所成交数量
	this.zCETotalTradedVolume = 0;
};

//最新数据
function SecurityLatestData() {
	// 触发日
	this.actionDay = "";
	// 卖1价
	this.askPrice1 = 0;
	// 卖2价
	this.askPrice2 = 0;
	// 卖3价
	this.askPrice3 = 0;
	// 卖4价
	this.askPrice4 = 0;
	// 卖5价
	this.askPrice5 = 0;
	// 卖1量
	this.askVolume1 = 0;
	// 卖2量
	this.askVolume2 = 0;
	// 卖3量
	this.askVolume3 = 0;
	// 卖4量
	this.askVolume4 = 0;
	// 卖5量
	this.askVolume5 = 0;
	// 平均价格
	this.averagePrice = 0;
	// 买1价
	this.bidPrice1 = 0;
	// 买2价
	this.bidPrice2 = 0;
	// 买3价
	this.bidPrice3 = 0;
	// 买4价
	this.bidPrice4 = 0;
	// 买5价
	this.bidPrice5 = 0;
	// 买1量
	this.bidVolume1 = 0;
	// 买2量
	this.bidVolume2 = 0;
	// 买3量
	this.bidVolume3 = 0;
	// 买4量
	this.bidVolume4 = 0;
	// 买5量
	this.bidVolume5 = 0;
	// 最新价
	this.close = 0;
	// 合约代码
	this.code = "";
	// 今虚实度
	this.currDelta = 0;
	// 交易所ID
	this.exchangeID = "";
	// 交易所InstID
	this.exchangeInstID = "";
	// 最高价
	this.high = 0;
	// 昨日收盘价
	this.lastClose = 0;
	// 最低价
	this.low = 0;
	// 跌停价
	this.lowerLimit = 0;
	// 开盘价
	this.open = 0;
	// 持仓量
	this.openInterest = 0;
	// 昨收盘
	this.preClose = 0;
	// 昨虚实度
	this.preDelta = 0;
	// 昨持仓量
	this.preOpenInterest = 0;
	// 上次结算价
	this.preSettlementPrice = 0;
	// 本次结算价
	this.settlementPrice = 0;
	// 交易日
	this.tradingDay = "";
	// 成交金额
	this.turnover = 0;
	// 最后修改毫秒
	this.updateMillisec = 0;
	// 最后修改时间
	this.updateTime = "";
	// 涨停价
	this.upperLimit = 0;
	// 成交量
	this.volume = 0;
};

//成交回报
function TradeRecord() {
	// 经纪公司代码
	this.brokerID = "";
	// / 经纪公司报单编号
	this.brokerOrderSeq = 0;
	// / 业务单元
	this.businessUnit = "";
	// / 结算会员编号
	this.clearingPartID = "";
	// / 客户代码
	this.clientID = "";
	// 合约代码
	this.code = "";
	// 手续费
	this.commission = 0;
	// 买卖方向
	this.direction = "";
	// 市场代码
	this.exchangeID = "";
	// 合约在交易所的代码
	this.exchangeInstID = "";
	// 投机套保标志
	this.hedgeFlag = "";
	// 投资者代码
	this.investorID = "";
	// 开平标志
	this.offsetFlag = "";
	// 本地报单编号
	this.orderLocalID = "";
	// 报单引用
	this.orderRef = "";
	// 报单编号
	this.orderSysID = "";
	// 会员代码
	this.participantID = "";
	// 价格
	this.price = 0;
	// 成交价来源
	this.priceSource = "";
	// 序号
	this.sequenceNo = 0;
	// 结算编号
	this.settlementID = 0;
	// 成交编号
	this.tradeID = "";
	// 交易所交易员代码
	this.traderID = "";
	// 成交时期
	this.tradeDate = "";
	// 成交来源
	this.tradeSource = "";
	// 成交时间
	this.tradeTime = "";
	// 交易日
	this.tradingDay = "";
	// 成交类型
	this.tradeType = "";
	// 交易角色
	this.tradingRole = "";
	// 数量
	this.volume = 0;
	// 用户代码
	this.userID = "";
};

//合约手续费率
function CommissionRate() {
	//经纪公司代码
	this.brokerID = "";
	//收费方式
	this.calculateMode = "";
	//平仓手续费率
	this.closeRatioByMoney = 0;
	//平仓手续费
	this.closeRatioByVolume = 0;
	//平今手续费率
	this.closeTodayRatioByMoney = 0;
	//平今手续费
	this.closeTodayRatioByVolume = 0;
	//平今费
	this.closeTodayFee = 0;
	//合约代码
	this.code = "";
	//代码
	this.commodityNo = "";
	//类型
	this.commodityType = "";
	//交易所编号
	this.exchangeNo = "";
	//投资者代码
	this.investorID = "";
	//投资者范围
	this.investorRange = "";
	//来源
	this.matchSource = "";
	//开平费
	this.openCloseFee = 0;
	//开仓手续费率
	this.openRatioByMoney = 0;
	//开仓手续费
	this.openRatioByVolume = 0;
};

//合约保证金率
function MarginRate() {
	//经纪公司代码
	this.brokerID = "";
	//收费方式
	this.calculateMode = "";
	//看涨看跌标示
	this.callOrPutFlag = "";
	//合约代码
	this.code = "";
	//代码
	this.commodityNo = "";
	//类型
	this.commodityType = "";
	//合约
	this.contractNo = "";
	//投机套保标志
	this.hedgeFlag = "";
	this.initialMargin = 0;
	//投资者代码
	this.investorID = "";
	//多头保证金率
	this.longMarginRatioByMoney = 0;
	//多头保证金费
	this.longMarginRatioByVolume = 0;
	//投资者范围
	this.investorRange = "";
	//是否相对交易所收取
	this.isRelativel = 0;
	this.lockMargin = 0;
	this.maintenanceMargin = 0;
	this.sellInitialMargin = 0;
	this.sellMaintenanceMargin = 0;
	//空头保证金率
	this.shortMarginRatioByMoney = 0;
	//空头保证金费
	this.shortMarginRatioByVolume = 0;
	//
	this.strikePrice = "";
};

//获取组合冻结量
var getFrozenAmount = function (data) {
	var posi = 0
	if (data.posiDirection == "多") {
		posi = data.longFrozen;
	}
	else if (data.posiDirection == "空") {
		posi = data.shortFrozen;
	}
	return posi
};

/*
 * 转换成CTP手续费率
 * result 字符串
 */
var convertToCTPCommissionRate = function (result) {
	var cTPCommissionRate = new CommissionRate();
	var results = str.split(',');
	cTPCommissionRate.code = results[0];
	cTPCommissionRate.investorRange = results[1];
	cTPCommissionRate.brokerID = results[2];
	cTPCommissionRate.investorID = results[3];
	cTPCommissionRate.openRatioByMoney = parseFloat(results[4]);
	cTPCommissionRate.openRatioByVolume = parseFloat(results[5]);
	cTPCommissionRate.closeRatioByMoney = parseFloat(results[6]);
	cTPCommissionRate.closeRatioByVolume = parseFloat(results[7]);
	cTPCommissionRate.closeTodayRatioByMoney = parseFloat(results[8]);
	cTPCommissionRate.closeTodayRatioByVolume = parseFloat(results[9]);
};

/*
 * 转换CTP保证金率
 * result 字符串
 */
var convertToCTPMarginRate = function (result) {
	var cTPMarginRate = new MarginRate()
	var results = str.split(',');
	cTPMarginRate.code = results[0];
	cTPMarginRate.brokerID = results[1];
	cTPMarginRate.investorID = results[2];
	cTPMarginRate.hedgeFlag = results[3];
	cTPMarginRate.longMarginRatioByMoney = parseFloat(results[4]);
	cTPMarginRate.longMarginRatioByVolume = parseFloat(results[5]);
	cTPMarginRate.shortMarginRatioByMoney = parseFloat(results[6]);
	cTPMarginRate.shortMarginRatioByVolume = parseFloat(results[7]);
	cTPMarginRate.isRelativel = int(results[8]);
};

/*
 * 转换资金账户结构
 * str 字符串
 */
var convertToCTPAccountData = function (str) {
	var cTPTradingAccount = new AccountData();
	var results = str.split(',');
	var alen = results.length;
	if (alen >= 46) {
		cTPTradingAccount.brokerID = results[0];
	}
	cTPTradingAccount.accountID = results[1];
	cTPTradingAccount.preMortgage = parseFloat(results[2]);
	cTPTradingAccount.preCredit = parseFloat(results[3]);
	cTPTradingAccount.preDeposit = parseFloat(results[4]);
	cTPTradingAccount.preBalance = parseFloat(results[5]);
	cTPTradingAccount.preMargin = parseFloat(results[6]);
	cTPTradingAccount.interestBase = parseFloat(results[7]);
	cTPTradingAccount.interest = parseFloat(results[8]);
	cTPTradingAccount.deposit = parseFloat(results[9]);
	cTPTradingAccount.withdraw = parseFloat(results[10]);
	cTPTradingAccount.frozenMargin = parseFloat(results[11]);
	cTPTradingAccount.frozenCash = parseFloat(results[12]);
	cTPTradingAccount.frozenCommission = parseFloat(results[13]);
	cTPTradingAccount.currMargin = parseFloat(results[14]);
	cTPTradingAccount.cashIn = parseFloat(results[15]);
	cTPTradingAccount.commission = parseFloat(results[16]);
	cTPTradingAccount.closeProfit = parseFloat(results[17]);
	cTPTradingAccount.positionProfit = parseFloat(results[18]);
	cTPTradingAccount.balance = parseFloat(results[19]);
	cTPTradingAccount.available = parseFloat(results[20]);
	cTPTradingAccount.withdrawQuota = parseFloat(results[21]);
	cTPTradingAccount.reserve = parseFloat(results[22]);
	cTPTradingAccount.tradingDay = results[23];
	cTPTradingAccount.settlementID = parseFloat(results[24]);
	cTPTradingAccount.credit = parseFloat(results[25]);
	cTPTradingAccount.mortgage = parseFloat(results[26]);
	cTPTradingAccount.exchangeMargin = parseFloat(results[27]);
	cTPTradingAccount.deliveryMargin = parseFloat(results[28]);
	cTPTradingAccount.exchangeDeliveryMargin = parseFloat(results[29]);
	cTPTradingAccount.reserveBalance = parseFloat(results[30]);
	cTPTradingAccount.currencyID = results[31];
	cTPTradingAccount.preFundMortgageIn = parseFloat(results[32]);
	cTPTradingAccount.preFundMortgageOut = parseFloat(results[33]);
	cTPTradingAccount.fundMortgageIn = parseFloat(results[34]);
	cTPTradingAccount.fundMortgageOut = parseFloat(results[35]);
	cTPTradingAccount.fundMortgageAvailable = parseFloat(results[36]);
	cTPTradingAccount.mortgageableFund = parseFloat(results[37]);
	cTPTradingAccount.specProductMargin = parseFloat(results[38]);
	cTPTradingAccount.specProductFrozenMargin = parseFloat(results[39]);
	cTPTradingAccount.specProductCommission = parseFloat(results[40]);
	cTPTradingAccount.specProductFrozenCommission = parseFloat(results[41]);
	cTPTradingAccount.specProductPositionProfit = parseFloat(results[42]);
	cTPTradingAccount.specProductCloseProfit = parseFloat(results[43]);
	cTPTradingAccount.specProductPositionProfitByAlg = parseFloat(results[44]);
	cTPTradingAccount.specProductExchangeMargin = parseFloat(results[45]);
	cTPTradingAccount.dynamicBalance = parseFloat(results[46]);
	cTPTradingAccount.risk = parseFloat(results[47]);
	cTPTradingAccount.floatProfit = parseFloat(results[48]);
	return cTPTradingAccount;
};

/*
 * 转换深度数据结构
 * str 字符串
 */
var convertToCTPDepthMarketData = function (str) {
	var list = new Array();
	var strs = str.split(';');
	var alen = strs.length;
	for (var i = 0; i < alen; i++) {
		var results = strs[i].split(',');
		if (results.length >= 43) {
			var cTPDepthMarketData = new SecurityLatestData();
			cTPDepthMarketData.tradingDay = results[0];
			cTPDepthMarketData.code = results[1];
			cTPDepthMarketData.exchangeID = results[2];
			cTPDepthMarketData.exchangeInstID = results[3];
			cTPDepthMarketData.close = parseFloat(results[4]);
			cTPDepthMarketData.preSettlementPrice = parseFloat(results[5]);
			cTPDepthMarketData.preClose = parseFloat(results[6]);
			cTPDepthMarketData.preOpenInterest = parseFloat(results[7]);
			cTPDepthMarketData.open = parseFloat(results[8]);
			cTPDepthMarketData.high = parseFloat(results[9]);
			cTPDepthMarketData.low = parseFloat(results[10]);
			cTPDepthMarketData.volume = parseFloat(results[11]);
			cTPDepthMarketData.turnover = parseFloat(results[12]);
			cTPDepthMarketData.openInterest = parseFloat(results[13]);
			cTPDepthMarketData.lastClose = parseFloat(results[14]);
			cTPDepthMarketData.settlementPrice = parseFloat(results[15]);
			cTPDepthMarketData.upperLimit = parseFloat(results[16]);
			cTPDepthMarketData.lowerLimit = parseFloat(results[17]);
			cTPDepthMarketData.preDelta = parseFloat(results[18]);
			cTPDepthMarketData.currDelta = parseFloat(results[19]);
			cTPDepthMarketData.updateTime = results[20];
			cTPDepthMarketData.updateMillisec = parseFloat(results[21]);
			cTPDepthMarketData.bidPrice1 = parseFloat(results[22]);
			cTPDepthMarketData.bidVolume1 = parseFloat(results[23]);
			cTPDepthMarketData.askPrice1 = parseFloat(results[24]);
			cTPDepthMarketData.askVolume1 = parseFloat(results[25]);
			cTPDepthMarketData.bidPrice2 = parseFloat(results[26]);
			cTPDepthMarketData.bidVolume2 = parseFloat(results[27]);
			cTPDepthMarketData.askPrice2 = parseFloat(results[28]);
			cTPDepthMarketData.askVolume2 = parseFloat(results[29]);
			cTPDepthMarketData.bidPrice3 = parseFloat(results[30]);
			cTPDepthMarketData.bidVolume3 = parseFloat(results[31]);
			cTPDepthMarketData.askPrice3 = parseFloat(results[32]);
			cTPDepthMarketData.askVolume3 = parseFloat(results[33]);
			cTPDepthMarketData.bidPrice4 = parseFloat(results[34]);
			cTPDepthMarketData.bidVolume4 = parseFloat(results[35]);
			cTPDepthMarketData.askPrice4 = parseFloat(results[36]);
			cTPDepthMarketData.askVolume4 = parseFloat(results[37]);
			cTPDepthMarketData.bidPrice5 = parseFloat(results[38]);
			cTPDepthMarketData.bidVolume5 = parseFloat(results[39]);
			cTPDepthMarketData.askPrice5 = parseFloat(results[40]);
			cTPDepthMarketData.askVolume5 = parseFloat(results[41]);
			cTPDepthMarketData.averagePrice = parseFloat(results[42]);
			cTPDepthMarketData.actionDay = results[43];
			list.push(cTPDepthMarketData);
		}
	}
	return list;
};

/*
 * 转换期货信息结构
 * str 字符串
 */
var convertToCTPInstrumentDatas = function (str) {
	var cTPInstrumentDatas = new Array();
	var strs = str.split(';');
	var alen = strs.length;
	for (var i = 0; i < alen; i++) {
		var results = strs[i].split(',');
		if (results.length >= 30) {
			var cTPInstrumentData = new Security();
			cTPInstrumentData.instrumentID = results[0];
			cTPInstrumentData.exchangeID = results[1];
			cTPInstrumentData.instrumentName = results[2];
			cTPInstrumentData.exchangeInstID = results[3];
			cTPInstrumentData.productID = results[4];
			cTPInstrumentData.productClass = results[5];
			cTPInstrumentData.deliveryYear = parseFloat(results[6]);
			cTPInstrumentData.deliveryMonth = parseFloat(results[7]);
			cTPInstrumentData.maxMarketOrderVolume = parseFloat(results[8]);
			cTPInstrumentData.minMarketOrderVolume = parseFloat(results[9]);
			cTPInstrumentData.maxLimitOrderVolume = parseFloat(results[10]);
			cTPInstrumentData.minLimitOrderVolume = parseFloat(results[11]);
			cTPInstrumentData.volumeMultiple = parseFloat(results[12]);
			cTPInstrumentData.priceTick = parseFloat(results[13]);
			cTPInstrumentData.createDate = results[14];
			cTPInstrumentData.openDate = results[15];
			cTPInstrumentData.expireDate = results[16];
			cTPInstrumentData.startDelivDate = results[17];
			cTPInstrumentData.endDelivDate = results[18];
			cTPInstrumentData.instLifePhase = results[19];
			cTPInstrumentData.isTrading = results[20];
			cTPInstrumentData.positionType = results[21];
			cTPInstrumentData.positionDateType = results[22];
			cTPInstrumentData.longMarginRatio = parseFloat(results[23]);
			cTPInstrumentData.shortMarginRatio = parseFloat(results[24]);
			cTPInstrumentData.maxMarginSideAlgorithm = results[25];
			cTPInstrumentData.underlyingInstrID = results[26];
			cTPInstrumentData.strikePrice = parseFloat(results[27]);
			cTPInstrumentData.optionsType = results[28];
			cTPInstrumentData.underlyingMultiple = parseFloat(results[29]);
			cTPInstrumentData.combinationType = results[30];
			cTPInstrumentDatas.push(cTPInstrumentData);
		}
	}
	return cTPInstrumentDatas;
};

/*
 * 转换持仓结构
 * str 字符串
 */
var convertToCTPInvestorPosition = function (str) {
	var list = new Array();
	var strs = str.split(';');
	var alen = strs.length;
	for (var i = 0; i < alen; i++) {
		var results = strs[i].split(',');
		if (results.length >= 42) {
			var cTPInvestorPosition = new InvestorPosition();
			cTPInvestorPosition.code = results[0];
			cTPInvestorPosition.brokerID = results[1];
			cTPInvestorPosition.investorID = results[2];
			cTPInvestorPosition.posiDirection = results[3];
			cTPInvestorPosition.hedgeFlag = results[4];
			cTPInvestorPosition.positionDate = results[5];
			cTPInvestorPosition.ydPosition = parseFloat(results[6]);
			cTPInvestorPosition.position = parseFloat(results[7]);
			cTPInvestorPosition.longFrozen = parseFloat(results[8]);
			cTPInvestorPosition.shortFrozen = parseFloat(results[9]);
			cTPInvestorPosition.longFrozenAmount = parseFloat(results[10]);
			cTPInvestorPosition.shortFrozenAmount = parseFloat(results[11]);
			cTPInvestorPosition.openVolume = parseFloat(results[12]);
			cTPInvestorPosition.closeVolume = parseFloat(results[13]);
			cTPInvestorPosition.openAmount = parseFloat(results[14]);
			cTPInvestorPosition.closeAmount = parseFloat(results[15]);
			cTPInvestorPosition.positionCost = parseFloat(results[16]);
			cTPInvestorPosition.preMargin = parseFloat(results[17]);
			cTPInvestorPosition.useMargin = parseFloat(results[18]);
			cTPInvestorPosition.frozenMargin = parseFloat(results[19]);
			cTPInvestorPosition.frozenCash = parseFloat(results[20]);
			cTPInvestorPosition.frozenCommission = parseFloat(results[21]);
			cTPInvestorPosition.cashIn = parseFloat(results[22]);
			cTPInvestorPosition.margin = parseFloat(results[23]);
			cTPInvestorPosition.floatProfit = parseFloat(results[24]);
			cTPInvestorPosition.positionProfit = parseFloat(results[25]);
			cTPInvestorPosition.preSettlementPrice = parseFloat(results[26]);
			cTPInvestorPosition.settlementPrice = parseFloat(results[27]);
			cTPInvestorPosition.tradingDate = results[28];
			cTPInvestorPosition.settlementID = parseFloat(results[29]);
			cTPInvestorPosition.openCost = parseFloat(results[30]);
			cTPInvestorPosition.exchangeMargin = parseFloat(results[31]);
			cTPInvestorPosition.combPosition = parseFloat(results[32]);
			cTPInvestorPosition.combLongFrozen = parseFloat(results[33]);
			cTPInvestorPosition.combShortFrozen = parseFloat(results[34]);
			cTPInvestorPosition.closeProfitByDate = parseFloat(results[35]);
			cTPInvestorPosition.closeProfitByTrade = parseFloat(results[36]);
			cTPInvestorPosition.todayPosition = parseFloat(results[37]);
			cTPInvestorPosition.marginRateByMoney = parseFloat(results[38]);
			cTPInvestorPosition.marginRateByVolume = parseFloat(results[39]);
			cTPInvestorPosition.strikeFrozen = parseFloat(results[40]);
			cTPInvestorPosition.strikeFrozenAmount = parseFloat(results[41]);
			cTPInvestorPosition.abandonFrozen = parseFloat(results[42]);
			cTPInvestorPosition.openPrice = parseFloat(results[43]);
			list.push(cTPInvestorPosition);
		}
	}
	return list;
};

/*
 * 转换持仓明细结构
 * str 字符串
 */
var convertToCTPInvestorPositionDetail = function (str) {
	var list = new Array();
	var strs = str.split(';');
	var alen = strs.length;
	for (var i = 0; i < alen; i++) {
		var results = strs[i].split(',');
		if (results.length >= 25) {
			var cTPInvestorPositionDetail = new InvestorPositionDetail();
			cTPInvestorPositionDetail.code = results[0];
			cTPInvestorPositionDetail.brokerID = results[1];
			cTPInvestorPositionDetail.investorID = results[2];
			cTPInvestorPositionDetail.hedgeFlag = results[3];
			cTPInvestorPositionDetail.direction = results[4];
			cTPInvestorPositionDetail.openDate = results[5];
			cTPInvestorPositionDetail.tradeID = results[6];
			cTPInvestorPositionDetail.volume = parseFloat(results[7]);
			cTPInvestorPositionDetail.openPrice = parseFloat(results[8]);
			cTPInvestorPositionDetail.tradingDay = results[9];
			cTPInvestorPositionDetail.settlementID = parseFloat(results[10]);
			cTPInvestorPositionDetail.tradeType = results[11];
			cTPInvestorPositionDetail.combInstrumentID = results[12];
			cTPInvestorPositionDetail.exchangeID = results[13];
			cTPInvestorPositionDetail.closeProfitByDate = parseFloat(results[14]);
			cTPInvestorPositionDetail.closeProfitByTrade = parseFloat(results[15]);
			cTPInvestorPositionDetail.positionProfitByDate = parseFloat(results[16]);
			cTPInvestorPositionDetail.positionProfitByTrade = parseFloat(results[17]);
			cTPInvestorPositionDetail.margin = parseFloat(results[18]);
			cTPInvestorPositionDetail.exchMargin = parseFloat(results[19]);
			cTPInvestorPositionDetail.marginRateByMoney = parseFloat(results[20]);
			cTPInvestorPositionDetail.marginRateByVolume = parseFloat(results[21]);
			cTPInvestorPositionDetail.lastSettlementPrice = parseFloat(results[22]);
			cTPInvestorPositionDetail.lastSettlementPrice = parseFloat(results[23]);
			cTPInvestorPositionDetail.settlementPrice = parseFloat(results[24]);
			cTPInvestorPositionDetail.closeVolume = parseFloat(results[25]);
			list.push(cTPInvestorPositionDetail);
		}
	}
	return list
};

/*
 * 转换成委托回报结构
 * str 字符串
 */
var convertToCTPOrder = function (str) {
	var cTPOrder = new OrderInfo();
	var results = str.split(',');
	var alen = results.length;
	if (alen >= 56) {
		cTPOrder.brokerID = results[0];
		cTPOrder.investorID = results[1];
		cTPOrder.code = results[2];
		cTPOrder.orderRef = results[3];
		cTPOrder.userID = results[4];
		cTPOrder.orderPriceType = results[5];
		cTPOrder.direction = results[6];
		cTPOrder.combOffsetFlag = results[7];
		cTPOrder.combHedgeFlag = results[8];
		cTPOrder.limitPrice = parseFloat(results[9]);
		cTPOrder.volumeTotalOriginal = parseFloat(results[10]);
		cTPOrder.timeCondition = results[11];
		cTPOrder.gTDDate = results[12];
		cTPOrder.volumeCondition = results[13];
		cTPOrder.minVolume = parseFloat(results[14]);
		cTPOrder.contingentCondition = results[15];
		cTPOrder.stopPrice = parseFloat(results[16]);
		cTPOrder.forceCloseReason = results[17];
		cTPOrder.isAutoSuspend = results[18];
		cTPOrder.businessUnit = results[19];
		cTPOrder.requestID = parseFloat(results[20]);
		cTPOrder.orderLocalID = results[21];
		cTPOrder.exchangeID = results[22];
		cTPOrder.participantID = results[23];
		cTPOrder.clientID = results[24];
		cTPOrder.exchangeInstID = results[25];
		cTPOrder.traderID = results[26];
		cTPOrder.installID = results[27];
		cTPOrder.orderSubmitStatus = results[28];
		cTPOrder.notifySequence = parseFloat(results[29]);
		cTPOrder.tradingDay = results[30];
		cTPOrder.settlementID = parseFloat(results[31]);
		cTPOrder.orderSysID = results[32];
		cTPOrder.orderSource = results[33];
		cTPOrder.orderStatus = results[34];
		cTPOrder.orderType = results[35];
		cTPOrder.volumeTraded = parseFloat(results[36]);
		cTPOrder.volumeTotal = parseFloat(results[37]);
		cTPOrder.insertDate = results[38];
		cTPOrder.insertTime = results[39];
		cTPOrder.activeTime = results[40];
		cTPOrder.suspendTime = results[41];
		cTPOrder.updateTime = results[42];
		cTPOrder.cancelTime = results[43];
		cTPOrder.activeTraderID = results[44];
		cTPOrder.clearingPartID = results[45];
		cTPOrder.sequenceNo = parseFloat(results[46]);
		cTPOrder.frontID = parseFloat(results[47]);
		cTPOrder.sessionID = parseFloat(results[48]);
		cTPOrder.userProductInfo = results[49];
		cTPOrder.statusMsg = results[50];
		cTPOrder.userForceClose = parseFloat(results[51]);
		cTPOrder.activeUserID = results[52];
		cTPOrder.brokerOrderSeq = parseFloat(results[53]);
		cTPOrder.relativeOrderSysID = results[54];
		cTPOrder.zCETotalTradedVolume = parseFloat(results[55]);
		cTPOrder.isSwapOrder = parseFloat(results[56]);
	}
	return cTPOrder;
};

/*
 * 转换成委托回报列表
 * str 字符串
 */
var convertToCTPOrderList = function (str) {
	var lst = new Array();
	var strs = str.split(';');
	var alen = strs.length;
	for (var i = 0; i < alen; i++) {
		lst.push(convertToCTPOrder(strs[i]));
	}
	return lst;
};

/*
 * 转换成成交回报结构
 * str 字符串
 */
var convertToCTPTrade = function (str) {
	var cTPTrade = new TradeRecord();
	var results = str.split(',');
	var alen = results.length;
	if (alen > 30) {
		cTPTrade.brokerID = results[0];
		cTPTrade.investorID = results[1];
		cTPTrade.code = results[2];
		cTPTrade.orderRef = results[3];
		cTPTrade.userID = results[4];
		cTPTrade.exchangeID = results[5];
		cTPTrade.tradeID = results[6];
		cTPTrade.direction = results[7];
		cTPTrade.orderSysID = results[8];
		cTPTrade.participantID = results[9];
		cTPTrade.clientID = results[10];
		cTPTrade.tradingRole = results[11];
		cTPTrade.exchangeInstID = results[12];
		cTPTrade.offsetFlag = results[13];
		cTPTrade.hedgeFlag = results[14];
		cTPTrade.price = parseFloat(results[15]);
		cTPTrade.volume = parseFloat(results[16]);
		cTPTrade.tradeDate = results[17];
		cTPTrade.tradeTime = results[18];
		cTPTrade.tradeType = results[19];
		cTPTrade.priceSource = results[20];
		cTPTrade.traderID = results[21];
		cTPTrade.orderLocalID = results[22];
		cTPTrade.clearingPartID = results[23];
		cTPTrade.businessUnit = results[24];
		cTPTrade.sequenceNo = parseFloat(results[25]);
		cTPTrade.tradingDay = results[26];
		cTPTrade.settlementID = parseFloat(results[27]);
		cTPTrade.brokerOrderSeq = parseFloat(results[28]);
		cTPTrade.tradeSource = results[29];
		cTPTrade.commission = parseFloat(results[30]);
	}
	return cTPTrade;
}

/*
 * 转换成成交回报列表
 * str 字符串
 */
var convertToCTPTradeRecords = function (str) {
	var list = new Array();
	var strs = str.split(';');
	var alen = strs.length;
	for (var i = 0; i < alen; i++) {
		list.push(convertToCTPTrade(strs[i]));
	}
	return list;
}