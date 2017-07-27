package cn.zhku.fishery.mybatis.entity;

import java.util.ArrayList;
import java.util.List;

public class AdminExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public AdminExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andAdminidIsNull() {
            addCriterion("adminid is null");
            return (Criteria) this;
        }

        public Criteria andAdminidIsNotNull() {
            addCriterion("adminid is not null");
            return (Criteria) this;
        }

        public Criteria andAdminidEqualTo(String value) {
            addCriterion("adminid =", value, "adminid");
            return (Criteria) this;
        }

        public Criteria andAdminidNotEqualTo(String value) {
            addCriterion("adminid <>", value, "adminid");
            return (Criteria) this;
        }

        public Criteria andAdminidGreaterThan(String value) {
            addCriterion("adminid >", value, "adminid");
            return (Criteria) this;
        }

        public Criteria andAdminidGreaterThanOrEqualTo(String value) {
            addCriterion("adminid >=", value, "adminid");
            return (Criteria) this;
        }

        public Criteria andAdminidLessThan(String value) {
            addCriterion("adminid <", value, "adminid");
            return (Criteria) this;
        }

        public Criteria andAdminidLessThanOrEqualTo(String value) {
            addCriterion("adminid <=", value, "adminid");
            return (Criteria) this;
        }

        public Criteria andAdminidLike(String value) {
            addCriterion("adminid like", value, "adminid");
            return (Criteria) this;
        }

        public Criteria andAdminidNotLike(String value) {
            addCriterion("adminid not like", value, "adminid");
            return (Criteria) this;
        }

        public Criteria andAdminidIn(List<String> values) {
            addCriterion("adminid in", values, "adminid");
            return (Criteria) this;
        }

        public Criteria andAdminidNotIn(List<String> values) {
            addCriterion("adminid not in", values, "adminid");
            return (Criteria) this;
        }

        public Criteria andAdminidBetween(String value1, String value2) {
            addCriterion("adminid between", value1, value2, "adminid");
            return (Criteria) this;
        }

        public Criteria andAdminidNotBetween(String value1, String value2) {
            addCriterion("adminid not between", value1, value2, "adminid");
            return (Criteria) this;
        }

        public Criteria andPasswordIsNull() {
            addCriterion("password is null");
            return (Criteria) this;
        }

        public Criteria andPasswordIsNotNull() {
            addCriterion("password is not null");
            return (Criteria) this;
        }

        public Criteria andPasswordEqualTo(String value) {
            addCriterion("password =", value, "password");
            return (Criteria) this;
        }

        public Criteria andPasswordNotEqualTo(String value) {
            addCriterion("password <>", value, "password");
            return (Criteria) this;
        }

        public Criteria andPasswordGreaterThan(String value) {
            addCriterion("password >", value, "password");
            return (Criteria) this;
        }

        public Criteria andPasswordGreaterThanOrEqualTo(String value) {
            addCriterion("password >=", value, "password");
            return (Criteria) this;
        }

        public Criteria andPasswordLessThan(String value) {
            addCriterion("password <", value, "password");
            return (Criteria) this;
        }

        public Criteria andPasswordLessThanOrEqualTo(String value) {
            addCriterion("password <=", value, "password");
            return (Criteria) this;
        }

        public Criteria andPasswordLike(String value) {
            addCriterion("password like", value, "password");
            return (Criteria) this;
        }

        public Criteria andPasswordNotLike(String value) {
            addCriterion("password not like", value, "password");
            return (Criteria) this;
        }

        public Criteria andPasswordIn(List<String> values) {
            addCriterion("password in", values, "password");
            return (Criteria) this;
        }

        public Criteria andPasswordNotIn(List<String> values) {
            addCriterion("password not in", values, "password");
            return (Criteria) this;
        }

        public Criteria andPasswordBetween(String value1, String value2) {
            addCriterion("password between", value1, value2, "password");
            return (Criteria) this;
        }

        public Criteria andPasswordNotBetween(String value1, String value2) {
            addCriterion("password not between", value1, value2, "password");
            return (Criteria) this;
        }

        public Criteria andAdminnameIsNull() {
            addCriterion("adminname is null");
            return (Criteria) this;
        }

        public Criteria andAdminnameIsNotNull() {
            addCriterion("adminname is not null");
            return (Criteria) this;
        }

        public Criteria andAdminnameEqualTo(String value) {
            addCriterion("adminname =", value, "adminname");
            return (Criteria) this;
        }

        public Criteria andAdminnameNotEqualTo(String value) {
            addCriterion("adminname <>", value, "adminname");
            return (Criteria) this;
        }

        public Criteria andAdminnameGreaterThan(String value) {
            addCriterion("adminname >", value, "adminname");
            return (Criteria) this;
        }

        public Criteria andAdminnameGreaterThanOrEqualTo(String value) {
            addCriterion("adminname >=", value, "adminname");
            return (Criteria) this;
        }

        public Criteria andAdminnameLessThan(String value) {
            addCriterion("adminname <", value, "adminname");
            return (Criteria) this;
        }

        public Criteria andAdminnameLessThanOrEqualTo(String value) {
            addCriterion("adminname <=", value, "adminname");
            return (Criteria) this;
        }

        public Criteria andAdminnameLike(String value) {
            addCriterion("adminname like", value, "adminname");
            return (Criteria) this;
        }

        public Criteria andAdminnameNotLike(String value) {
            addCriterion("adminname not like", value, "adminname");
            return (Criteria) this;
        }

        public Criteria andAdminnameIn(List<String> values) {
            addCriterion("adminname in", values, "adminname");
            return (Criteria) this;
        }

        public Criteria andAdminnameNotIn(List<String> values) {
            addCriterion("adminname not in", values, "adminname");
            return (Criteria) this;
        }

        public Criteria andAdminnameBetween(String value1, String value2) {
            addCriterion("adminname between", value1, value2, "adminname");
            return (Criteria) this;
        }

        public Criteria andAdminnameNotBetween(String value1, String value2) {
            addCriterion("adminname not between", value1, value2, "adminname");
            return (Criteria) this;
        }

        public Criteria andAdminphoneIsNull() {
            addCriterion("adminphone is null");
            return (Criteria) this;
        }

        public Criteria andAdminphoneIsNotNull() {
            addCriterion("adminphone is not null");
            return (Criteria) this;
        }

        public Criteria andAdminphoneEqualTo(String value) {
            addCriterion("adminphone =", value, "adminphone");
            return (Criteria) this;
        }

        public Criteria andAdminphoneNotEqualTo(String value) {
            addCriterion("adminphone <>", value, "adminphone");
            return (Criteria) this;
        }

        public Criteria andAdminphoneGreaterThan(String value) {
            addCriterion("adminphone >", value, "adminphone");
            return (Criteria) this;
        }

        public Criteria andAdminphoneGreaterThanOrEqualTo(String value) {
            addCriterion("adminphone >=", value, "adminphone");
            return (Criteria) this;
        }

        public Criteria andAdminphoneLessThan(String value) {
            addCriterion("adminphone <", value, "adminphone");
            return (Criteria) this;
        }

        public Criteria andAdminphoneLessThanOrEqualTo(String value) {
            addCriterion("adminphone <=", value, "adminphone");
            return (Criteria) this;
        }

        public Criteria andAdminphoneLike(String value) {
            addCriterion("adminphone like", value, "adminphone");
            return (Criteria) this;
        }

        public Criteria andAdminphoneNotLike(String value) {
            addCriterion("adminphone not like", value, "adminphone");
            return (Criteria) this;
        }

        public Criteria andAdminphoneIn(List<String> values) {
            addCriterion("adminphone in", values, "adminphone");
            return (Criteria) this;
        }

        public Criteria andAdminphoneNotIn(List<String> values) {
            addCriterion("adminphone not in", values, "adminphone");
            return (Criteria) this;
        }

        public Criteria andAdminphoneBetween(String value1, String value2) {
            addCriterion("adminphone between", value1, value2, "adminphone");
            return (Criteria) this;
        }

        public Criteria andAdminphoneNotBetween(String value1, String value2) {
            addCriterion("adminphone not between", value1, value2, "adminphone");
            return (Criteria) this;
        }

        public Criteria andAdminemailIsNull() {
            addCriterion("adminemail is null");
            return (Criteria) this;
        }

        public Criteria andAdminemailIsNotNull() {
            addCriterion("adminemail is not null");
            return (Criteria) this;
        }

        public Criteria andAdminemailEqualTo(String value) {
            addCriterion("adminemail =", value, "adminemail");
            return (Criteria) this;
        }

        public Criteria andAdminemailNotEqualTo(String value) {
            addCriterion("adminemail <>", value, "adminemail");
            return (Criteria) this;
        }

        public Criteria andAdminemailGreaterThan(String value) {
            addCriterion("adminemail >", value, "adminemail");
            return (Criteria) this;
        }

        public Criteria andAdminemailGreaterThanOrEqualTo(String value) {
            addCriterion("adminemail >=", value, "adminemail");
            return (Criteria) this;
        }

        public Criteria andAdminemailLessThan(String value) {
            addCriterion("adminemail <", value, "adminemail");
            return (Criteria) this;
        }

        public Criteria andAdminemailLessThanOrEqualTo(String value) {
            addCriterion("adminemail <=", value, "adminemail");
            return (Criteria) this;
        }

        public Criteria andAdminemailLike(String value) {
            addCriterion("adminemail like", value, "adminemail");
            return (Criteria) this;
        }

        public Criteria andAdminemailNotLike(String value) {
            addCriterion("adminemail not like", value, "adminemail");
            return (Criteria) this;
        }

        public Criteria andAdminemailIn(List<String> values) {
            addCriterion("adminemail in", values, "adminemail");
            return (Criteria) this;
        }

        public Criteria andAdminemailNotIn(List<String> values) {
            addCriterion("adminemail not in", values, "adminemail");
            return (Criteria) this;
        }

        public Criteria andAdminemailBetween(String value1, String value2) {
            addCriterion("adminemail between", value1, value2, "adminemail");
            return (Criteria) this;
        }

        public Criteria andAdminemailNotBetween(String value1, String value2) {
            addCriterion("adminemail not between", value1, value2, "adminemail");
            return (Criteria) this;
        }

        public Criteria andNoteIsNull() {
            addCriterion("note is null");
            return (Criteria) this;
        }

        public Criteria andNoteIsNotNull() {
            addCriterion("note is not null");
            return (Criteria) this;
        }

        public Criteria andNoteEqualTo(String value) {
            addCriterion("note =", value, "note");
            return (Criteria) this;
        }

        public Criteria andNoteNotEqualTo(String value) {
            addCriterion("note <>", value, "note");
            return (Criteria) this;
        }

        public Criteria andNoteGreaterThan(String value) {
            addCriterion("note >", value, "note");
            return (Criteria) this;
        }

        public Criteria andNoteGreaterThanOrEqualTo(String value) {
            addCriterion("note >=", value, "note");
            return (Criteria) this;
        }

        public Criteria andNoteLessThan(String value) {
            addCriterion("note <", value, "note");
            return (Criteria) this;
        }

        public Criteria andNoteLessThanOrEqualTo(String value) {
            addCriterion("note <=", value, "note");
            return (Criteria) this;
        }

        public Criteria andNoteLike(String value) {
            addCriterion("note like", value, "note");
            return (Criteria) this;
        }

        public Criteria andNoteNotLike(String value) {
            addCriterion("note not like", value, "note");
            return (Criteria) this;
        }

        public Criteria andNoteIn(List<String> values) {
            addCriterion("note in", values, "note");
            return (Criteria) this;
        }

        public Criteria andNoteNotIn(List<String> values) {
            addCriterion("note not in", values, "note");
            return (Criteria) this;
        }

        public Criteria andNoteBetween(String value1, String value2) {
            addCriterion("note between", value1, value2, "note");
            return (Criteria) this;
        }

        public Criteria andNoteNotBetween(String value1, String value2) {
            addCriterion("note not between", value1, value2, "note");
            return (Criteria) this;
        }

        public Criteria andAdminflagIsNull() {
            addCriterion("adminflag is null");
            return (Criteria) this;
        }

        public Criteria andAdminflagIsNotNull() {
            addCriterion("adminflag is not null");
            return (Criteria) this;
        }

        public Criteria andAdminflagEqualTo(Integer value) {
            addCriterion("adminflag =", value, "adminflag");
            return (Criteria) this;
        }

        public Criteria andAdminflagNotEqualTo(Integer value) {
            addCriterion("adminflag <>", value, "adminflag");
            return (Criteria) this;
        }

        public Criteria andAdminflagGreaterThan(Integer value) {
            addCriterion("adminflag >", value, "adminflag");
            return (Criteria) this;
        }

        public Criteria andAdminflagGreaterThanOrEqualTo(Integer value) {
            addCriterion("adminflag >=", value, "adminflag");
            return (Criteria) this;
        }

        public Criteria andAdminflagLessThan(Integer value) {
            addCriterion("adminflag <", value, "adminflag");
            return (Criteria) this;
        }

        public Criteria andAdminflagLessThanOrEqualTo(Integer value) {
            addCriterion("adminflag <=", value, "adminflag");
            return (Criteria) this;
        }

        public Criteria andAdminflagIn(List<Integer> values) {
            addCriterion("adminflag in", values, "adminflag");
            return (Criteria) this;
        }

        public Criteria andAdminflagNotIn(List<Integer> values) {
            addCriterion("adminflag not in", values, "adminflag");
            return (Criteria) this;
        }

        public Criteria andAdminflagBetween(Integer value1, Integer value2) {
            addCriterion("adminflag between", value1, value2, "adminflag");
            return (Criteria) this;
        }

        public Criteria andAdminflagNotBetween(Integer value1, Integer value2) {
            addCriterion("adminflag not between", value1, value2, "adminflag");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}