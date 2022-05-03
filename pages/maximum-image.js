import Image from 'next/image';
import naturePicture from '../public/assets/nature.jpg';
import axios from 'axios';

function MaxImage() {
	return (
		<>
			<Image src={naturePicture} alt="Picture of the nature" />

			<br />
			<br />
			<Image
				src="https://images.unsplash.com/photo-1525824236856-8c0a31dfe3be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdhdGVyZmFsbHxlbnwwfHwwfHw%3D"
				alt="Picture of the author"
				width={400}
				height={500}
			/>
			<br />
			<br />
			<Image
				src={naturePicture}
				alt="Picture of the nature"
				placeholder="blur"
			/>
			<br />
			<br />
			<Image
				src={naturePicture}
				alt="Picture of the nature"
				placeholder="blur"
				layout="responsive"
				width={5}
				height={5}
			/>
			<br />
			<br />
			<Image
				src={naturePicture}
				alt="Picture of the nature"
				placeholder="blur"
				width={800}
				height={500}
				quality={100}
			/>
		</>
	);
}

export default MaxImage;

// export const getStaticProps = async () => {
// 	const remoteImage =
// 		'https://images.unsplash.com/photo-1525824236856-8c0a31dfe3be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdhdGVyZmFsbHxlbnwwfHwwfHw%3D';

// 	const { base64, img } = await axios.get(remoteImage, { size: 10 });

// 	// console.log(base64);
// 	return {
// 		props: {
// 			imageProps: { ...img, blurDataURL: base64, remoteImage }
// 		}
// 	};
// };
