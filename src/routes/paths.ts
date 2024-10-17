/**
 * Auth Routes.
 * This is a list of routes or pages that are used for authentication. e.g login, register etc
 */
export const authRoutes = {
    // auth
    signIn: "/login",
    signUp: "/register",
};

/**
 * Admin Routes
 * This is a list of routes or pages that are used for authentication of the admin. e.g dashboard, properties management etc
 */
export const adminRoutes = {
    admindashboard: "/admin/dashboard",
    adminproperties: "/admin/properties",
    adminpropertiesEdit: (id:string) =>  `/admin/properties/edit/${id}`,
    adminsingleProperty: (id:string) =>  `/admin/properties/${id}`,
    adminprofile: "/admin/profile",
    adminsales: "/admin/sales",
}

/**
 * Public Routes
 * This is a list of routes or pages that are accessible to the everyone without a need to login  e.g homepage, properties, contact us etc
 */
export const publicRoutes = {
    home: "/",
    about: "/about-us",
    properties: "/properties",
    singleProperty: (id: string) => `/admin/properties/${id}`,
    services: "/services",
    contact: "/contact-us"
}
/**
 * App Route Paths
 * This is a combination of all the available routes/pages i.e. authRoutes, adminRoutes, publicRoutes etc
 */
export const appRoutePaths = {
    ...authRoutes,
    ...adminRoutes,
    ...publicRoutes,
    googleMap: `https://goo.gl/maps/wZGLU81Aq68uT18c91`
}