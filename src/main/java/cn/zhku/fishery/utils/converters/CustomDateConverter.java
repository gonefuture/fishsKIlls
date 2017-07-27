package cn.zhku.fishery.utils.converters;

import org.springframework.core.convert.converter.Converter;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * @author 钱伟健 gonefutre
 * @date 2017/7/26 16:41.
 * @E-mail gonefuture@qq.com
 */
public class CustomDateConverter implements Converter<String,Date>{

    @Override
    public Date convert(String source) {

        //实现 将日期串转成日期类型(格式是yyyy-MM-dd HH:mm:ss)

        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

        try {
            //转成直接返回
            return simpleDateFormat.parse(source);
        } catch (ParseException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        //如果参数绑定失败返回null
        return null;
    }

}
