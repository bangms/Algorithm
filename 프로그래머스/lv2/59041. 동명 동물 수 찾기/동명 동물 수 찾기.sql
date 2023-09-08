-- 코드를 입력하세요
select * from (SELECT name, count(name) as count from animal_ins group by name order by name) where count >= 2;