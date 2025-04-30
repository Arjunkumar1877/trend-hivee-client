


export const URLS = {
    // user
    getHomePage(){
        return '/'
    },
    getProductsPage(){
        return '/products'
    },
    getProductDetailPage(id = 1){
        return `/products/${id}`
    },
    getAboutPage(){
        return '/about'
    },
    getContactPage(){
        return '/contact'
    },
    getLoginPage(){
        return '/login'
    },
    getSignupPage(){
        return '/signup'
    },
    getCartPage(){
        return '/cart'
    },
    getCheckoutPage(){
        return '/checkout'
    },












    // admin
    getAdminEditProductsPage(id: string){
        return `/admin/products/${id}/edit-product`
    },

}