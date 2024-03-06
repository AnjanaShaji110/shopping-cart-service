const getCategories =
  "SELECT id as categoryId, category_name as categoryName, description, img_url as image FROM categories";

const getProductsByCategoryId = "SELECT JSON_OBJECT('categoryId', categories.id,'categoryName',category_name, 'description',description, 'image',img_url) as category, JSON_ARRAYAGG(JSON_OBJECT('productId',products.id,'productName',product_name,'productDetails',product_details,'price',price ,'quantity',quantity, 'image',image)) AS products FROM products RIGHT JOIN categories ON categories.id = products.category_id WHERE category_id = ?;"


module.exports = {
  getCategories,
  getProductsByCategoryId,
};
