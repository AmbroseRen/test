
DDL(数据定义):Data Definition Language
   - create: CREATE TABLE amb(id NUMBER(2,0) primary key, 
name VARCHAR2(50), age NUMBER(2)) 
   - rename A to B  修改表名A为B
   - alter: 
alter table name add(hiredate DATE DEFAULT sysdate) 增加字段
		（只能增加在最后，不能插入现有列）
	            modify(job varchar2(40)) 修改字段
                             drop column (hiredate) 删除字段
   - drop table NAME:
      注：删除表结构。
   - truncate:
truncate table emp;
      注：删除表数据，保留结构 
DCL(数据控制):Data Control Language
   - grant:
   - revoke:
   - create user:
DML(数据操纵):Data Manipulation Language
   - insert:   INSERT INTO amb(id1,name1,age1) VALUES( , , )
   - 日期格式：TO_DATE('1999-9-9','YYYY-MM-DD')
	and to_char(t.zdrq, 'yyyy-MM-dd') >= '2018-11-22'
	and t.zdrq>= TO_DATE('2018-11-22','YYYY-MM-DD')
   - delete: DELETE FROM TABLE WHERE ...
   - update: UPDATE amb SET name='' WHERE id=?  更新数据
TCL(事物控制):Data Transaction Language
   - commit
   - rollback
   - savepoint
DQL(数据查询):Data  Language
   - select:SELECT * FROM amb 
   - DESC  查询表结构  
------------------NUMBER数值类型--------------------------
   ----NUMBER(precision,scale)
- number(5,2)
-------NUMBER的变种数据类型：内部实现NUMBER，可以将其理解为NUMBER的别名
         目的：实现多种数据库及编程语言的兼容
- numeric(p,s):完全映射至number(p,s)
- decimal(p,s):同上
- integer/int:完全映射至NUMBER(38)类型
- select trunc(<用于截取>) from dual
- where length(ename)>5  <length>得到字符长度 
------------------CHAR类型---------------------------
 - CAHR(N)：N为占用字节，最大长度——2000字节。
    定长——默认长度为1，可不指定长度。
 - CLOB：存储定长或变长字符串，最大存储4GB
    储存定长或变长字符串。
 - VARCHAR2(N):最大长度——4000字节。
变长——必须指定长度
 - LONG：VARCHAR2()加长版，最大存储：2GB
    限制：每个表只能有一个LONG类型字段；不能作为主键；不能建立索引；
不能出现在查询条件中...
Oracle建议使用CLOB代替LONG类型
------------------补位函数-----------------------
 - LPAD(char1,n,char2) 左补位函数
 - EPAD(char1,n,char2) 右补位函数
--将sal用$补齐6位
select ename,LPAD(sal,6,'$') FROM emp;
--------------连接字符串char1,char2--------------
SELECT CONCAT(CONCAT(enname,','),sal) FROM emp__Ambrose
简便方法： ||
SELECT enname||','||sal FROM emp__Ambrose
LEGTH(ename)
------------大小写转换--------------------
select upper("hello world"),lower("HELLO WORLD"),INITCAP("hello world") from dual
UPPER(char):将字符转换为大写形式
LOWER(char):将字符转换为小写形式
INITCAP(char):将首字母大写，单词间用空格隔开
-----------------字段相加-----------------
- SELECT enname,sal,comm,sal+comm FROM emp__Ambrose
------------------空值处理------------------
select ename,sal,comm,sal+nvl(comm,0) FROM emp;
--NVL2(expr1,expr2,expr3):判断expr1不为空取expr2，为空取expr3.
select ename,sal,comm,nvl2(comm,sal+comm,sal) FROM emp
---------------------符号判断--------------------
>,<,>=,<=,!=等价于<>,=

----------接口选择性数据改动：DECODE()-------------------------------
SELECT enname,job,sal,DECODE(job,'MANAGER',sal*1.2,'ANALYEST',sal*1.1,'SALESMAN',sal*1.05,sal) de FROM emp__Ambrose 
SELECT enname,job,sal,CASE job 
  WHEN 'MANAGER' THEN sal*1.2 
  WHEN 'ANALEST' THEN sal*1.1 
  WHEN 'SALESMAN' THEN sal*1.4 
  ELSE sal  
  END bonus  FROM emp__Ambrose e
SELECT COUNT(*),DECODE(JOB,'MANAGER','VIP','ANALYST','VIP','SELESMAN','OTHER') FROM emp__Ambrose 
GROUP BY DECODE(JOB,'MANAGER','VIP','ANALYST','VIP','SELESMAN','OTHER') 
SELECT deptno,dname,loc FROM dept__Ambrose  ORDER BY DECODE(dname,'OPERATION','1','ACCOUNTING','2','SALES','3')
-------------TRIM,LTRIM,RTRIM:去除字符串两边重复字符，或单独去除左或右边的字符----------
-SELECT TRIM('e' FROM 'eeeefdsfkeeee') FROM emp__Ambrose	字符串全去重
-SELECT LTRIM('fffdaf','f') FROM emp__Ambrose			字符串左去重
-SELECT RTRIM('eeeeliteeee' , 'e') FROM dual			字符串右去重

-----------------------substr/instr截取字符串/查询字符串位置-----------------------
SELECT SUBSTR('thinking in java' ,-7,2) FROM dual	-号为倒序截取

SELECT SUBSTR('thinking in java' ,7,2) FROM dual

SELECT SUBSTR('thinking0in java' ,-9,2) FROM dual

SELECT INSTR('thinging in java','in',4,2) FROM dual	查询字符串位置

------------round（四舍五入），mod（取余）-------------------------
-round(m,n)  n为正即取到的小数为；为负责即取到的整数位
SELECT ROUND(45.678,2) FROM dual; --45.68
SELECT ROUND(45.678,-1) FROM dual;  --46
SELECT ROUND(55.678,-2) FROM dual; --60
- mod  取余
SELECT MOD(13,4) FROM dual; --1
- ceil  向上取整
SELECT CEIL(45.12) FROM dual; --46
- floor  向下取整
SELECT FLOOR(45.678) FROM dual; --45
- trunc():用于截取
SELECT TRUNC(45.678,2) FROM DUAL； --45.67
                         (45.678,-1)                         --40
------------------------sql日期类型-----------------------------------
- 中文日期转英文格式
- TO_DATE('1999-09-09','YYYY-MM-DD')
SELECT SYSDATE-TO_DATE('1993-09-09','YYYY-MM-DD HH24:MI:SS') FROM dual
- 英文日期转中文格式
- TO_CHAR(TO_DATE('08-09-50','MM-DD-RR'),'YYYY-MM-DD')--先转to_date再转to_char
 注：日期格式转换为中文字符串格式
- last_day
  SELECT LAST_DAY(SYSDATE) FROM DUAL
 注：查系统当月最后一天
    SELECT EXTRACT(YEAR FROM SYSDATE) FROM dual 提取年份
- systimestamp
   SELECT SYSTIMESTAMP FROM DUAL
   注：查询纳秒级时间
- sysdate:查系统时间
  SELECT SYSDATE FROM DUAL 
- next_day:查下周第四天
  SELECT NEXT_DAY(SYSDATE,4) FROM dual  
- least
  SELECT LEAST(TO_DATE('2008-08-08','YYYY-MM-DD'),SYSDATE) FROM dual
  注：设置日期
- SELECT ADD_MONTHS(hiredate,-12*20) from emp__ambrose
  注：查询20个月后
 -month_between:计算时间间隔
  SELECT ename,MONTH_BETWEEN(SYSDATE,hforFROM emp;
 -least:比较日期大小(有隐含转换--若参数不一致，第二个参数的类型会被隐含转换为第一个参数的类型)
  SELECT LEAST(SYSDATE,'10-10月-08') FROM DUAL;
 -extract:提取日期指定字段
SELECT EXTRACT(HOUR FROM TIMESTAMP '2008-10-10 10:10:10') FROM DUAL;
------------------------约束-------------------------------
 - LIKE模糊匹配字符串，支持两个通配符：
%：0-多个字符    
_:单一的一个字符*/
 - WHERE ename LIKE '_A%';
  判断在或不在列表中
 - IN(list)和 NOT IN(list)
  ----区间约束---
 - BETWEEN...AND...
 注：
SELECT enname,sal,dephno FROM emp__Ambrose
WHERE (SAL BETWEEN 1000 AND 3000) AND dephno IN('20','30')
AND (enname LIKE '_%A%')
    ------聚合函数--------
/*聚合函数又称为分组函数，多行函数。
聚合函数的作用是对结果集指定字段的值进行统计工作*/
    MAX(),MIN(),SUM(),AVG()， COUNT()
求 最大值，最小值，求和，求平均数,统计记录条数
SELECT MAX(sal),MIN(sal),SUM(sal),AVG(sal),COUNT(sal) FROM emp__Ambrose
     ------COUNT(*)查看记录条数--------
 - SELECT COUNT(*) FROM emp__Ambrose； 
    ---------DISTINCT:去除重复字段-----------
SEECT DISTINCE deptno from dual;
 -------NVL（，)应用：聚合函数有NULL值时--------------
SELECT AVG(NVL(comm,0)) FROM emp__Ambrose
   ------聚合函数不能用在where子句中
   ------GROUP BY ***根据给定的字段值一样的记录进行分组(即：统计一组条件时)
   ------HAVING子句可以根据聚合函数进行过滤
SELECT MAX(sal),dephno FROM emp__Ambrose
GROUP BY dephno
HAVING　AVG(sal)>2000
   ！！-----关联查询-------
    ---------内连接-----------
SELECT e.enname,e.dephno,d.deptno,d.loc FROM emp__Ambrose e,dept__Ambrose d
WHERE e.dephno=d.deptno
AND d.loc='NEWYORK' 
    ----------外连接------------
 外连接：在关联查询中除了将可以满足连接条件的记录查询出来之外，
 还可以将不满足连接条件的记录也列出来。
 外连接分为：左外连接，右外连接，全外连接
  左外连接：以JOIN左则表作为驱动表，该表记录都要查询出来，
  当某条记录不满足连接条件时，
  那么在结果集中该条记录来自JOIN右侧的字段的值全都为NULL
 - 左外连接
 SELECT e.enname,e.job,e.sal,d.dname,d.loc FROM emp__Ambrose e
 LEFT OUTER JOIN dept__Ambrose d ON e.dephno=d.deptno
 - 右外连接
SELECT e.enname,e.sal,e.job,d.dname,d.loc FROM emp__Ambrose e
RIGHT OUTER JOIN dept__Ambrose d ON e.dephno=d.deptno
 - 全连接
SELECT e.enname,e.job,e.sal,d.dname,d.loc FROM emp__Ambrose e
FULL OUTER JOIN dept__Ambrose ON e.dephno=d.deptno
   ------------自连接---------------
 - 为解决与自己相同属性，但本身又存在上下级关系的树状结构数据
SELECT e.enname,d.enname FROM emp__Ambrose e
LEFT OUTER JOIN emp__Ambrose d ON d.mgr=e.empno
    --------内连接join...on...关联查询--------
SELECT e.enname,d.dname FROM emp__Ambrose e
JOIN dept__Ambrose d ON e.dephno=d.deptno

    !!**---------条件比较约束--------------**
/*ANY(list),ALL(list)
ANY,ALL 是配合>,>=,<=使用的
>ANY(list):大于列表之一，大于最小
<ANY(list):小于列表之一，小于最大
>ALL(list):大于列表所有，大于最小
<ALL(list):小于列表所有，小于最小
ANY,ALL的列表中不会给固定值，没有实际意义，
他们常配合子查询使用*/
SELECT enname,job,sal,dephno,empno FROM emp__Ambrose
--WHERE　sal>ANY(3500,4000,4500)
WHERE sal>ALL(1500,3000,4500)
 - DISTINCT(修饰词):抹掉重复元素或相同的记录
SELECT DISTINCT job,dephno FROM emp__Ambrose
   -------------排序---------------
 - ORDER BY ** DESC(降序排列)/ASC(升序排列) 

 - 接口选择性数据改动：CASE * WHEN * THEN * ELSE *0 END *1 FROM *
SELECT enname,job,sal,DECODE(job,'MANAGER',sal*1.2,'ANALYEST',sal*1.1,'SALESMAN',sal*1.05,sal) de FROM emp__Ambrose 
SELECT enname,job,sal,CASE job 
  WHEN 'MANAGER' THEN sal*1.2 
  WHEN 'ANALEST' THEN sal*1.1 
  WHEN 'SALESMAN' THEN sal*1.4 
  ELSE sal  
  END bonus  FROM emp__Ambrose e
------------------------排序函数-----------------------------
--分组百分比排序
select name, (round(max(xj) / max(zj), 2)) * 100 || '%'
from (select name,
	    je,
	    sum(je) over(partition by name order byname) xj,
	    sum(je) over() zj
         from th_01)
group by name;
--e.g.
select fpzt,
       (round((max(sl)/max(zj)),2))*100 ||'%' as pec 
from (select t.fpzt,
             count(*) as sl,
             sum(t.fpzt) over(partition by t.fpzt order by t.fpzt) xj,
             sum(count(*)) over() zj
      from DZFP_FPXX t
      group by t.fpzt)
group by fpzt
order by fpzt desc;
--按月份统计分组 e.g.
select TO_CHAR(T.cjsj,'YYYY-MM') tim,count(*) sl
from dual
--WHERE TO_CHAR(T.cjsj,'YYYY') = TO_CHAR(SYSDATE,'YYYY')
group by t.fpzt,
	 TO_CHAR(t.cjsj,'YYYY-MM')
order by tim desc
--按周统计分组
SELECT TO_CHAR(T.MODIFIEDTIME,'YYYY') YEAR,
       TO_CHAR(T.MODIFIEDTIME,'IW') TIME,
       COUNT(*) COUNT
from dual
--WHERE TO_CHAR(T.MODIFIEDTIME,'YYYY') = TO_CHAR(SYSDATE,'YYYY')
GROUP BY TO_CHAR(T.MODIFIEDTIME,'IW'),TO_CHAR(T.MODIFIEDTIME,'YYYY')
ORDER BY TO_CHAR(T.MODIFIEDTIME,'YYYY'),TO_CHAR(T.MODIFIEDTIME,'IW') ASC NULLS  LAST
--按天统计分组
SELECT TO_CHAR(T.MODIFIEDTIME,'YYYY-MM-DD') tim,COUNT(*) sl
from dual
-- WHERE TO_CHAR(T.MODIFIEDTIME,'YYYY') = TO_CHAR(SYSDATE,'YYYY')
GROUP BY TO_CHAR(T.MODIFIEDTIME,'YYYY-MM-DD')
ORDER BY TO_CHAR(T.MODIFIEDTIME,'YYYY-MM-DD') ASC NULLS LAST
排序函数可以将结果集按照指定的字段分组，然后组内再按照指定的字段排序后对每组的记录产生一个行号。
 - ROW_NUMBER()<!修饰词>:生成组内连续且唯一的数字。
SELECT enname,sal,job,dephno, 
ROW_NUMBER() OVER(PARTITION BY dephno ORDER BY sal DESC) rank 
FROM emp__Ambrose
不连续且不唯一
SELECT enname,sal,job,dephno, RANK() OVER(PARTITION BY dephno ORDER BY sal DESC) rank FROM emp__Ambrose
连续且不唯一
SELECT enname,sal,job,dephno, DENSE_RANK() OVER(PARTITION BY dephno ORDER BY sal DESC) rank FROM emp__Ambrose
   -----查询某年月日的营业额？------
SELECT TRUNC(DBMS_RANDOM.value(2012,2012)) AS year_id,
  TRUNC(DBMS_RANDOM.value(1,13)) AS month_id,
  TRUNC(DBMS_RANDOM.value(1,32)) day_id,
  ROUND(DBMS_RANDOM.value(1,100),2) AS sales_value FROM dual
CONNECT BY level <=1000
---------------------交集、并集-----------------------------
 - 并集
SELECT enname,job,sal FROM emp__Ambrose WHERE job='MANAGER' 
UNION 
SELECT enname,job,sal FROM emp__Ambrose WHERE sal>2500
 - 全集
SELECT enname,job,sal FROM emp__Ambrose WHERE JOB='MANAGER' 
UNION ALL 
SELECT enname,job,sal FROM emp__Ambrose WHERE  sal>2500
 - 交集
SELECT enname,job,sal FROM emp__Ambrose WHERE job ='MANAGER'
INTERSECT 
SELECT enname,job,sal FROM emp__Ambrose WHERE sal >2500

----------------立方集----------------------------------
ROLLUP()函数
ROLLUP中的每个参数就是需要分组的字段。
ROLLUP会将参数字段逐个递减并分组统计
GROUP BY ROLLUP(a,b,c)
等价：
GROUP BY a,b,c
UNION ALL GROUP BY a,b
UNION ALL GROUP BY a
UNION ALL
全表
SELECT year_id,mouth_id,day_id,SUM(sales_value) FROM sales_tab_Ambrose
GROUP BY ROLLUP(year_id,mouth_id,day_id) ORDER BY year_id,mouth_id,day_id

CUBE()函数，将每个参数的每种组合都进行一次分组，然后将所有统计结果并在一个结果集中显示，
所以CUBE分组次数为2的参数个数次方。
SELECT year_id,mouth_id,day_id,SUM(sales_value) FROM sales_tab_Ambrose
GROUP BY CUBE(year_id,mouth_id,day_id) ORDER BY year_id,mouth_id,day_id

GROUP BY SETS()
GROUPING SET的每一个参数是一种分组方式，它会将这些分组统计的结果并在一个结果集中显示
--查看每天与每月的营业额？
SELECT year_id,mouth_id,day_id,SUM(sales_value) FROM sales_tab_Ambrose
GROUP BY GROUPING SETS((year_id,mouth_id,day_id),(year_id,mouth_id)) 
ORDER BY year_id,mouth_id,day_id

----------------------VIEW----------------------------------
 - 创建视图
CREATE VIEW view_Ambrose AS 
SELECT empno,enname,sal,dephno FROM emp__Ambrose WHERE dephno=10 

对视图进行不当的DML操作会污染基础数据表
即：对视图进行DML操作后，视图对基础表对应数据进行该DML操作，
但是操作后的视图对该记录不可见
DELETE不会产生污染现象
DELETE FROM view_Ambrose WHERE dephno=20

------给列表起别名 create or repalce view V_a as select 别名 id from a--------

为视图添加检查选项，可以避免对视图操作而导致对基础表的数据污染。
 - WITH CHECK OPTION 
只读选项
 - WITH READ ONLY
只读选项要求对视图仅能进行查询操作不能进行任何DML操作
选项要求对视图进行DML操作后，该记录必须对视图可见。
CREATE OR REPLACE VIEW VIEW_Ambrose AS 
SELECT empno id,enname name,sal salary,dephno FROM emp__Ambrose
WHERE dephno=10 
WITH CHECK OPTION
DESC view_abmrose

------------------SEQUENCE序列-------------------------
 - 创建序列
CREATE SEQUENCE sql_emp_id_Ambro
START WITH 1 INCREMENT BY 1
 - 序列支持的“伪列”
序列支持连个伪列：
NEXTVAL:获取序列的下一个数字，若果是新创建的序列，那么会从START WITH开始返回。
之后则是用上次生成的数字加上步长来得到本次生成的数字并返回。
（序列不能后退，且不受事务控制）
 
 CURRVAL:获取序列最后生成的数字，新创建的序列至少调用NEXTVAL生成一个数字后才可以使用。
 CURRVAL不会导致序列步进
 SELECT sql_emp_id_Ambrose.NEXTVAL FROM DUAL
 SELECT sql_emp_id_Ambrose.CURRVAL FROM DUAL
 
 - 创建索引
CREATE INDEX idx_emp_Ambrose ON emp__Ambrose(enname)
 - 复合索引
CREATE INDEX idx_emp__Ambrose_job_sal ON emp__Ambrose(job,sal)
CREATE INDEX emp__Ambrose_upper_idx ON emp__Ambrose(UPPER(enname))
SELECT * FROM emp__Ambrose WHERE UPPER(enname)='KING'
 - 重建索引：ALTER INDEX * REBUILD
ALTER INDEX index_name REBUILD
DROP INDEX idx_emp__Ambrose_enname
 - 非空约束
ALTER TABLE employees_Ambrose MODIFY(eid NUMBER(6) NOT NULL)
 - 唯一性约束
CREATE TABLE employees2_Ambrose(
  eid NUMBER(6) UNIQU
