import http from "../services/httpService"

const JWT_TOKEN = `JWT ${localStorage.getItem("access")}`
const PRODUCT_URL = "/api/product/"
const PRODUCT_CHARACTERISTICS_URL = "/api/productCharacteristic/"


export function get_products() {
    return http.get(PRODUCT_URL,
        {
            headers: {
                'Authorization': JWT_TOKEN
            }
        })
}

export async function create_product(product) {
    const response = await http.post(PRODUCT_URL,
        {
            "sku": product.sku,
            "title": product.title,
            "fabric": product.fabric,
            "fit": product.fit,
            "collars_type": product.collars_type,
            "sleeves": product.sleeves,
            "cuff_style": product.cuff_style,
            "product_url": product.product_url,
            "image_url": product.image_url,
            "category": "Shirts",
            "price": product.price,
            "discount": product.discount,
            "quantity": product.quantity,
        },
        {
            headers: {
                'Authorization': JWT_TOKEN
            }
        }
    )
    const colors = product.color.split(",")
    const size = product.size.split(",")

    for (let i = 0; i < colors.length; i++) {
        http.post(PRODUCT_CHARACTERISTICS_URL,
            {
                "color": colors[i],
                "size": size[i],
                "product": response.data.id
            },
            {
                headers: {
                    'Authorization': JWT_TOKEN
                }
            })

    }
    return response
}

export async function update_product(product) {
    const response = await http.patch(`${PRODUCT_URL}${product.id}/`,
        {
            "sku": product.sku,
            "title": product.title,
            "fabric": product.fabric,
            "fit": product.fit,
            "collars_type": product.collars_type,
            "sleeves": product.sleeves,
            "cuff_style": product.cuff_style,
            "product_url": product.product_url,
            "image_url": product.image_url,
            "category": "Shirts",
            "price": product.price,
            "discount": product.discount,
            "quantity": product.quantity,
        },
        {
            headers: {
                'Authorization': JWT_TOKEN
            }
        }
    )
    for (let i = 0; i < product.color.length; i++) {
        try {
            http.post(PRODUCT_CHARACTERISTICS_URL,
                {
                    "color": product.color[i],
                    "size": product.size[i],
                    "product": response.data.id
                },
                {
                    headers: {
                        'Authorization': JWT_TOKEN
                    }
                })
        } catch (ex) {
            console.log(ex)
        }


    }
}

export function delete_product(id) {
    return http.delete(`${PRODUCT_URL}${id}/`,
        {
            headers: {
                'Authorization': JWT_TOKEN
            }
        });
}