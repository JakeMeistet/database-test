-- the record_id must be unique
-- you choose the value in this case
-- make sure that you do not use a value that has already been used

create table names (record_id int primary key,
first_name varchar(20) not null,
last_name varchar(20) not null);



-- adding data
insert into names (record_id,first_name, last_name) values (1,'John', 'Doe');
insert into names (record_id,first_name, last_name) values (2,'Jane', 'Doe');
insert into names (record_id,first_name, last_name) values (3,'Akio', 'Kim');

-- put your own name in the table
insert into names (record_id,first_name, last_name) values (4,'Jake', 'Bailey');