import { pool } from "../config/mysql-config.js"

export async function addProduct(products) {
    const [rows] = await products.map((product) => pool.query(`INSERT INTO product (brand_id, category_id, name, sale, price, image, created_date) VALUES ('${product.id}', '${product.category}','${product.name}', 'none','${product.sale}',${Number(product.price)})`))
    return rows;
}
``
export async function getProduct() {
    const [rows] = await pool.query(`SELECT products.id, products.image, products.price , products.name, products.sale, brands.name as brands, category.name as category FROM products INNER JOIN brands ON products.brand_id = brands.id INNER JOIN category ON products.category_id = category.id;`)
    return rows;
}

export async function addLimit(limit) {
    const [rows] = await pool.query(`SELECT products.id, products.image, products.price , products.name, products.sale, brands.name as brands, category.name as category FROM products INNER JOIN brands ON products.brand_id = brands.id INNER JOIN category ON products.category_id = category.id LIMIT ${limit}`)
    return rows;
}