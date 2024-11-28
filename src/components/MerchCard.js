const MerchCard = ({ product }) => {
    // Prefix the URL if it's missing
    // the url was missing the http part
    const imageUrl = product?.imageUrl
        ? `https://${product.imageUrl.replace(/^https?:\/\//, '')}`
        : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/560px-PNG_transparency_demonstration_1.png';

    return (
        <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl">
                <img
                    src={imageUrl}
                    alt={product?.name || 'Default Name'}
                    className="h-full w-full object-contain"
                />
            </div>
            <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                        {product?.name || 'No name available'}
                    </p>
                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                        {product?.price?.current?.text || 'Price unavailable'}
                    </p>
                </div>
            </div>
            <div className="p-6 pt-0">
                <button
                    className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default MerchCard;
