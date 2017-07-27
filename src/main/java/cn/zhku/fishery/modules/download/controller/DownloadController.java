package cn.zhku.fishery.modules.download.controller;

import cn.zhku.fishery.modules.download.service.DownloadSerivce;
import cn.zhku.fishery.mybatis.entity.Download;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @author 钱伟健 gonefutre
 * @date: 2017/6/22 21:35.
 * @E-mail: gonefuture@qq.com
 */

@Controller
//
public class DownloadController {
    @Autowired
    private DownloadSerivce downloadSerivce;

    @RequestMapping(value ="showDown", params="method=showDown")
    @ResponseBody
    public List<Download> list(int cp, int ls ) {
        if(cp == 0 )
            cp =1;
        if(ls ==0)
            ls=10;
        return  downloadSerivce.list(cp,ls);
    }
}
