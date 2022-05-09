# Examples of how to create a json API with nestjs, express, koa or egg

## There are five examples
[The first example is based on nestjs, typeorm and MySQL.](./nestjs-example)
[The second example is based on express, typeorm and MySQL.](./express-typeorm-example)
[The third example is based on express, sequelize and MySQL.](./express-example)
[The fourth example is based on koa, sequelize and MySQL.](./koa-example)
[The fifth example is based on egg, sequelize and MySQL.](./egg-example)

## Database
```
CREATE TABLE `tdar_store` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ctime` datetime DEFAULT NULL COMMENT 'when to create',
  `mtime` datetime DEFAULT NULL COMMENT 'when to modify',
  `dtime` datetime DEFAULT NULL COMMENT 'when to soft-delete',
  `priority` int(11) NOT NULL DEFAULT 100 COMMENT 'used to sort',
  `comment` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_active` tinyint(4) NOT NULL DEFAULT 1 COMMENT 'if is is active',
  `is_del` tinyint(4) NOT NULL DEFAULT 0 COMMENT 'if it is soft-deleted',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci 
```

## Test api by Postman
Use the Postman to import the following json file: [examples.postman_collection.json](./examples.postman_collection.json).


## Test api by the curl command
Test the list api
```
$ curl -X GET "http://127.0.0.1:8080/api/store/getList?rowCountPerPage=5&pageIndex=0"
```

Test the detail api
```
$ curl -X GET "http://127.0.0.1:8080/api/store/getDetail?id=549"
```

Test the create api
```
$ curl -X POST "http://127.0.0.1:8080/api/store/create" -d "name=abc&address=efg"
```

Test the delete api
```
$ curl -X POST "http://127.0.0.1:8080/api/store/delete" -d "id=600"
```

Test the update api
```
$ curl -X POST "http://127.0.0.1:8080/api/store/update" -d "id=601&name=abc&address=efg"
```
