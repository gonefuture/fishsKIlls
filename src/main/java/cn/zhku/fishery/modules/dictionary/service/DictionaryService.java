package cn.zhku.fishery.modules.dictionary.service;

import cn.zhku.fishery.modules.dictionary.entity.DictCustomer;
import cn.zhku.fishery.mybatis.entity.Dictionary;
import cn.zhku.fishery.mybatis.entity.DictionaryExample;
import cn.zhku.fishery.mybatis.mapper.DictionaryMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author 钱伟健 gonefutre
 * @date 2017/7/16 9:34.
 * @E-mail gonefuture@qq.com
 */
@Service
public class DictionaryService {
    @SuppressWarnings("SpringJavaAutowiringInspection")
    @Autowired
    private DictionaryMapper dictionaryMapper;
    public DictCustomer dic(int dic) {
        DictCustomer dictCustomer = new DictCustomer();
        Dictionary dictionary = dictionaryMapper.selectByPrimaryKey(dic);
        if(dictionary ==null)
            return null;
        BeanUtils.copyProperties(dictionary, dictCustomer);
       if(dictCustomer.getPid() !=0)
            dictCustomer.setPname(dictionaryMapper.selectByPrimaryKey(dictCustomer.getPid()).getName());
       else
            dictCustomer.setPname(null);
        //插入同级字典
        dictCustomer.setSiblingDict(dictList(dictCustomer, dictCustomer.getPid()));
        //插入子字典
        dictCustomer.setSubDict(dictList(dictCustomer, dictCustomer.getPid()));
        return dictCustomer;
    }

    /**
     * 通过查找pid来获取父字典或子字典
     * @param dictCustomer
     * @param id
     * @return
     */
    public List<Dictionary> dictList(DictCustomer dictCustomer, int id) {
        DictionaryExample dictionaryExample = new DictionaryExample();
        dictionaryExample.or().andPidEqualTo(id);
        return dictionaryMapper.selectByExample(dictionaryExample);
    }



}
