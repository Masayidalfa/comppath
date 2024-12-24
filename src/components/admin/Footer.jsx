function Footer() {
    return(
        <footer className="py-4 bg-gray-100 mt-auto">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between text-sm text-gray-500">
                    <div>Copyright © Your Website 2023</div>
                    <div className="space-x-2">
                        <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                        <span>·</span>
                        <a href="#" className="text-blue-600 hover:underline">Terms &amp; Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;