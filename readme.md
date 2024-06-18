# NodeJs Server
  1 install install
  2 npm start
# Apis descriptions
1~ Users apis
  POST `/apis/users/signup`
  POST `/apis/users/signin`
2~ Products Apis
  POST `/apis/products/` ---> create product with auth Bearer token          
  GET `/apis/products/`  ---> get all products
  GET `/apis/products/:id` ---> get products by product id
  PUST `/apis/products/:id` ---> update product by id and data:{ name, price, description, inStock}
  DELETE `/apis/products/:id` ---> delete product by id
3~ Category Apis
  POST `/apis/categories` ---> create category with auth Bearer token
  GET `/apis/categories`  ---> get all categories
  GET `/apis/categories/id` ---> get category by id
  PUT `/apis/categories/:id` ---> update catergory by id data:{name} 
  DELETE `/apis/categories/:id` ---> delete category by id
4~ Cart Apis
  POST `/apis/carts/add` ---> create cart input data:{productId, quantity} 
  GET `/apis/carts` ---> get all carts
  POST `/apis/carts/remove` ---> remove product from cart input data:{productId}
  POST `/apis/carts/checkout` ---> make checkout
5~ Post Apis
  POST `/apis/posts?userId=${userId}` ---> create posts with auth Bearer token input data:{title, content}  
  GET `/apis/posts` ---> get all posts
  GET `/apis/posts/:userId` ---> get post by userId 
  POST `/apis/posts/comment?userId=${userId}&postId=${postId}` ---> add comment input data:{content}