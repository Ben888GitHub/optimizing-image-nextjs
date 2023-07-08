import Image from 'next/image';
import naturePicture from '../public/assets/nature.jpg';

const ResponsiveImages = () => {
	return (
		<>
			<h1>Responsive Images</h1>
			<div>
				<Image
					src={naturePicture}
					alt="Picture of the nature"
					// width={500}
					// height={500}
					layout="responsive"
					sizes="320 640 750"
					priority
				/>
			</div>
		</>
	);
};

export default ResponsiveImages;
