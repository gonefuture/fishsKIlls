package cn.zhku.fishery.modules.dictionary.controller;

import cn.zhku.fishery.modules.dictionary.entity.DictCustomer;
import cn.zhku.fishery.modules.dictionary.service.DictionaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @author 钱伟健 gonefutre
 * @date 2017/7/16 9:27.
 * @E-mail gonefuture@qq.com
 */

@Controller
public class DictionaryController {
    @Autowired
    private DictionaryService dictionaryService;

    @RequestMapping(value="DicServlet",params="method=dic")
    @ResponseBody
    public DictCustomer dic(int dic) {
        return  dictionaryService.dic(dic);
    }
}
