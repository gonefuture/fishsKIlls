package cn.zhku.fishery.modules.market.service;

import cn.zhku.fishery.mybatis.entity.*;
import cn.zhku.fishery.mybatis.mapper.MarketMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author 钱伟健 gonefutre
 * @date 2017/7/14 22:54.
 * @E-mail gonefuture@qq.com
 */
@Service
public class MarketService {
    @SuppressWarnings("SpringJavaAutowiringInspection")
    @Autowired
    MarketMapper marketMapper;


    public List<Market> showMarket(int cp, int ls) {
        return marketMapper.MarketList(cp,ls);
    }

    public Message insertMarket(Market market) {
        if (marketMapper.insert(market) != 0)
            return new Message(1, "插入市场信息成功");
        else
            return new Message(2,"插入市场信息失败");
    }

    public Message deleteMarket(int marketid) {
        if (marketMapper.deleteByPrimaryKey(marketid) != 0)
            return new Message(1, "删除市场信息成功");
        else
            return new Message(2,"删除市场信息失败");

    }

    public Message updateMarket(Market market) {
        if (marketMapper.updateByPrimaryKey(market) != 0)
            return new Message(1, "更新市场信息成功");
        else
            return new Message(2,"更新市场信息失败");
    }

    public List<Market> selectMarket(String marketname) {
        MarketExample marketExample = new MarketExample();
        marketExample.or().andMarketnameLike("%"+marketname+"%");
        return marketMapper.selectByExample(marketExample);


    }
}
