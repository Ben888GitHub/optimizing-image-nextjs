import Image from 'next/image';

const ImageCropping = () => {
	return (
		<div className="max-w-[165px] md:max-w-xs lg:max-w-xs">
			<Image
				src={`https://picsum.photos/id/${randomId}/640/340`}
				layout="fill"
				objectFit="cover"
				// priority
				alt="al"
			/>
		</div>
	);
};

export default ImageCropping;
