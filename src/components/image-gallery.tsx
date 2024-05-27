import React, { useState } from "react";
import { ImageData } from "../lib/types";

type ImageGalleryProps = {
  images?: ImageData[];
};

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const mainImage = images?.find((image) => image.isMain);
  const [selectedImage, setSelectedImage] = useState(mainImage?.imgUri);

  return (
    <div className="w-full md:w-1/2 md:h-[598px] flex flex-col-reverse md:flex-row md:gap-x-3 p-1 gap-y-3">
      <div className="flex items-center justify-center md:flex-col gap-x-3 md:gap-y-3">
        {/* Images */}
        {images?.map((item, index) => (
          <React.Fragment key={index}>
            <img
              src={item.imgUri}
              className="w-[114px] h-[190px] object-cover cursor-pointer"
              onClick={() => setSelectedImage(item.imgUri)}
            />
          </React.Fragment>
        ))}
      </div>
      <div className="flex-1 max-md:h-[50vh] ">
        {selectedImage ? (
          <img src={selectedImage} className="h-full w-full object-cover" />
        ) : (
          <> {/* TODO: Implement error image */} </>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
