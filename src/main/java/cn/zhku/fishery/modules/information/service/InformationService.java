package cn.zhku.fishery.modules.information.service;

import cn.zhku.fishery.mybatis.entity.Information;
import cn.zhku.fishery.mybatis.entity.InformationExample;
import cn.zhku.fishery.mybatis.entity.Message;
import cn.zhku.fishery.mybatis.mapper.InformationMapper;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * @author 钱伟健 gonefutre
 * @date 2017/7/14 17:00.
 * @E-mail gonefuture@qq.com
 */

@Service
public class InformationService {
   @SuppressWarnings("SpringJavaAutowiringInspection")
    @Autowired
    private InformationMapper informationMapper;

    public List<Information> showInformation(int pageNum,int pageSize) {
        pageNum = (pageNum-1)*pageSize;
        return informationMapper.InfoList(pageNum,pageSize);
    }

    public List<Information> selectInformation(String marketname) {
        InformationExample informationExample = new InformationExample();
        informationExample.or().andInformationnameLike("%"+marketname+"%");
        return (informationMapper.selectByExample(informationExample ));
    }

    public Message deleteInformation(int informationid) {
        if( informationMapper.deleteByPrimaryKey(informationid) != 0)
            return  new Message(1, "删除成功");
        else
            return new Message(2,"删除失败");
    }

    public Message insertInformation(Information information) {
        if(information.getDate() ==null)
            information.setDate(new Date().toString());
        if(informationMapper.insert(information) != 0)
            return  new Message(1, "插入信息成功");
        else
            return new Message(2,"插入信息失败");
    }

    public Message updateInformation(Information information) {
        if(information.getDate() ==null)
            information.setDate(new Date().toString());
        if(informationMapper.updateByPrimaryKeyWithBLOBs(information) != 0)
            return  new Message(1, "更新信息成功");
        else
            return new Message(2,"更新信息失败");
    }

    public Information selectInfoId(Integer informationid) {
        return informationMapper.selectByPrimaryKey(informationid);
    }
}
