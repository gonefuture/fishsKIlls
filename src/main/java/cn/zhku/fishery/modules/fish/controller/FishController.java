package cn.zhku.fishery.modules.fish.controller;

import cn.zhku.fishery.modules.fish.service.FishService;
import cn.zhku.fishery.mybatis.entity.Fish;
import cn.zhku.fishery.mybatis.entity.Message;
import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.PageInfo;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @author 钱伟健 gonefutre
 * @date: 2017/6/22 21:32.
 * @E-mail: gonefuture@qq.com
 */

@Controller
//
@RequestMapping()
public class FishController {
    @Autowired
    private FishService fishService;



    @RequestMapping(value = "back/Fish",params = "method=insertFish")
    @ResponseBody
    public Message insertFish(Fish fish) {
        return  fishService.insertFish(fish);
    }

    @RequestMapping(value = "back/Fish",params = "method=deleteFish")
    @ResponseBody
    public Message deleteFish(int fid ) {
        return fishService.deleteFish(fid);
    }


    @RequestMapping(value = "back/Fish",params = "method=updateFish")
    @ResponseBody
    public Message updateFish(Fish fish) {
        return  fishService.updateFish(fish);
    }


    @RequestMapping(value = "back/Fish",params = "method=selectFish")
    @ResponseBody
    public List<Fish> list(String fishname) {
        return fishService.list(fishname);
    }



    @RequestMapping(value = "Fish",params = "method=showFish")
    @ResponseBody
    public List<Fish> showFish(int pageNum, @Param("pageSize") String pageSize) {
        if(pageSize == null)
            pageSize="5";
        return fishService.showFish(pageNum,Integer.valueOf(pageSize));
    }

    @RequestMapping(value = "Fish",params = "method=allPage")
    @ResponseBody
    public Object allPage() {
        JSONObject obj=new JSONObject();
        obj.put("allPage", fishService.allPage());
        return obj;
    }
}
