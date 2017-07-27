package cn.zhku.fishery.modules.information.controller;

import cn.zhku.fishery.modules.information.service.InformationService;
import cn.zhku.fishery.mybatis.entity.Information;
import cn.zhku.fishery.mybatis.entity.Message;
import cn.zhku.fishery.mybatis.entity.News;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @author 钱伟健 gonefutre
 * @date  2017/7/14 0:18.
 * @E-mail gonefuture@qq.com
 */
@Controller
public class InformationController {
    @Autowired
    private InformationService informationService;


    @RequestMapping(value = " /back/Info",params = "method=insertInformation")
    @ResponseBody
    public Message insertInformation(Information information) {
        return informationService.insertInformation(information);
    }


    @RequestMapping(value = "/back/Info",params = "method=deleteInformation")
    @ResponseBody
    public Message  deleteInformation(int informationid) {
        return informationService.deleteInformation(informationid);
    }


    @RequestMapping(value = " /back/Info",params = "method=updateInformation")
    @ResponseBody
    public Message updateInformation(Information information) {
        return informationService.updateInformation(information);
    }




    @RequestMapping(value = "/back/Info",params = "method=selectInformation")
    @ResponseBody
    public List<Information> selectInformation(String marketname) {
        return informationService.selectInformation(marketname);
    }

    @RequestMapping(value = "/Info",params = "method=selectInfoId")
    @ResponseBody Information selectInfoId(String informationid) {
        return  informationService.selectInfoId(Integer.valueOf(informationid));
    }


    @RequestMapping(value = "/Info",params = "method=showInformation")
    @ResponseBody
    public List<Information> showInformation(int pageNum,String pageSize) {
        if(pageSize == null)
            pageSize = "5";
        return informationService.showInformation(pageNum,Integer.valueOf(pageSize));
    }

}
