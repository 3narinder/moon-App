import Breadcrumb from "@/components/Breadcrum";
import SectionHeading from "@/components/custom/SectionHeading";
import ProductList from "@/components/ProductList";
import ProductImageGallery from "@/components/ProductImageGallery";
import { products } from "@/constants";
import { notFound } from "next/navigation";
import StarRating from "@/components/custom/StarRatings";
import ProductActions from "@/components/ProductAction";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import ProductAccordion from "@/components/ProductAccordion";

interface ProductPageProps {
  params?: { id?: string };
}

const ProductPage = ({ params }: ProductPageProps) => {
  const product = products?.find((p) => p?.id?.toString() === params?.id);

  if (!product) return notFound();

  return (
    <div className="lg:px-32 py-8">
      <Breadcrumb productName={product.name} />

      <div className="mt-12 flex lg:flex-row lg:justify-start flex-col lg:gap-14 gap-12 lg:ml-0 mx-4">
        {/* product image gallery */}
        <ProductImageGallery images={product.image} alt={product.name} />

        {/* Product detail */}
        <div className="flex flex-col">
          {/* Product name */}
          <h1 className="text-display-4 font-semibold uppercase text-warm-black tracking-wide">
            {product?.name}
          </h1>

          {/* star rating and stock */}
          <div className="flex items-center mt-2">
            <StarRating rating={4} size={16} />

            <div className="text-display-2 text-neutral-7 ml-4">
              (1256 Reviews)
            </div>

            <div className="text-display-2 ml-12 flex">
              <span className="text-neutral-7">Stock :</span>

              <span className="text-light-brown ml-1">in stock</span>
            </div>
          </div>

          {/* price */}
          <div className="flex gap-3 mt-2">
            <span className="text-display-6 text-neutral-6 tracking-wide">
              $500
            </span>
            <span className="text-display-6 text-neutral-8 tracking-wide">
              ${product?.price}
            </span>
          </div>

          {/* product action */}
          <ProductActions />

          {/* social media  */}
          <div className="lg:mt-12 mt-8">
            <div className="text-display-3 font-semibold text-warm-black">
              Share this:
            </div>

            <div className="flex items-center gap-3 text-light-brown mt-2">
              <FaFacebookF className="text-lg cursor-pointer" />
              <FaTwitter className="text-lg cursor-pointer" />
              <AiFillInstagram className="text-lg cursor-pointer" />
              <FaLinkedinIn className="text-lg cursor-pointer" />
            </div>
          </div>

          <div className="lg:mt-12 mt-8">
            <ProductAccordion />
          </div>
        </div>
      </div>

      <div className="lg:py-20 py-12">
        <SectionHeading alignStart text="Similar items" />
        <ProductList grid4 limit={4} />
      </div>
    </div>
  );
};

export default ProductPage;
