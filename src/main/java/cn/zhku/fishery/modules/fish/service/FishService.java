package cn.zhku.fishery.modules.fish.service;


import cn.zhku.fishery.mybatis.entity.Fish;
import cn.zhku.fishery.mybatis.entity.FishExample;
import cn.zhku.fishery.mybatis.entity.Message;
import cn.zhku.fishery.mybatis.mapper.FishMapper;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author 钱伟健 gonefutre
 * @date: 2017/7/13 12:21.
 * @E-mail: gonefuture@qq.com
 */

@Service
public class FishService {
    @SuppressWarnings("SpringJavaAutowiringInspection")
    @Autowired
    private FishMapper fishMapper;

    public List<Fish> list(String fishname) {
        FishExample fishExample = new FishExample();
        fishExample.or().andFishnameLike("%"+fishname+"%");
        return  fishMapper.selectByExample(fishExample);
    }


    public List<Fish> showFish(int pageNum,int pageSize) {
       pageNum = (pageNum - 1)*pageNum;
        return  fishMapper.list(pageNum,pageSize);
    }

    public Message insertFish(Fish fish) {
        if(fishMapper.insert(fish) != 0)
            return new Message(1,"插入鱼成功");
        else
            return new Message(2,"插入鱼失败");
    }

    public Message deleteFish(int fid) {
        if(fishMapper.deleteByPrimaryKey(fid) !=0)
            return  new Message(1,"删除新闻成功");
        else
            return new Message(2,"删除新闻失败");
    }

    public Message updateFish(Fish fish) {
        if(fishMapper.updateByPrimaryKey(fish) != 0)
            return new Message(1,"更新鱼成功");
        else
            return new Message(2,"更新鱼失败");
    }

    public Long allPage() {
        return fishMapper.countByExample(new FishExample());
    }
}
