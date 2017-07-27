package cn.zhku.fishery.utils.prevent_repetition;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * @author 钱伟健 gonefutre
 * @date 2017/7/15 20:34.
 * @E-mail gonefuture@qq.com
 */
/**
 * 防止post请求重复提交
 */
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface repeat_form_validator {


}
