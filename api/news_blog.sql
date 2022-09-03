create database if not exists news_blog;

use news_blog;

create table news
(
    id          int auto_increment
        primary key,
    title       varchar(255)                        not null,
    description text                                not null,
    image       text                                null,
    datetime    timestamp default CURRENT_TIMESTAMP null
);

create table comments
(
    id      int auto_increment
        primary key,
    author  varchar(255) null,
    message text         not null,
    news_id int          not null,
    constraint comments_news_null_fk
        foreign key (news_id) references news (id)
            on update cascade on delete cascade
);

INSERT INTO news (title, description, image)
VALUES ('Comics', 'about marvel', null);

INSERT INTO comments (author, message, news_id)
VALUES ('iron-man', 'i will be back', 1);

