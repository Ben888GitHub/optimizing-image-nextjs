import Image from 'next/image';
import naturePicture from '../public/assets/nature.jpg';

function Example1() {
	return (
		<>
			<h1>Nature Gallery</h1>
			<Image src={naturePicture} alt="View of a Nature" />
			<br />
			<h2>Placeholder</h2>
			<h5>placeholder to use while the Image is loading</h5>
			<h5>to have a blur placeholder image, we need to pass a blurDataURL</h5>
			<Image
				src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
				alt="Picture of the nature"
				width={500}
				height={500}
				priority
				// placeholder to use while the Image is loading
				// it can be "empty", "blur", or any other Components
				placeholder="empty"
				// placeholder="blur" // blur placeholder only works with Static Image / Local
				// blurDataURL="" // to have a blur placeholder image, we need to pass a blurDataURL
			/>
			<br />
			<br />
			<h2>Lazy Boundary</h2>
			<h5>
				{' '}
				lazyBoundary acts as the bounding box used to detect the intersection of
				the images viewport and trigger lazy loading
			</h5>
			<Image
				src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
				alt="Picture of the nature"
				width={500}
				height={500}
				priority
				lazyBoundary="300px" // lazyBoundary acts as the bounding box used to detect the intersection of the image's viewport and trigger lazy loading
			/>
			<br />
			<br />
			<h2>Object Fit</h2>
			<h5>
				{' '}
				objectFit acts as the CSS property used to fit the image to the
				container
			</h5>
			<Image
				src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
				alt="Picture of the nature"
				width={500}
				height={500}
				priority
				// objectFit="contain | cover | fill | none"
				objectFit="none" // objectFit acts as the CSS property used to fit the image to the container
			/>
			<br />
			<br />
			<h2>Object Position</h2>
			<h5>
				objectPosition acts as the CSS property used to position the image
				inside the container
			</h5>
			<Image
				src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
				alt="Picture of the nature"
				width={500}
				height={500}
				priority
				objectFit="none"
				// objectPosition="top | down | bottom | center | 200px | 50% | left | right | top left | top right | bottom left | bottom right"
				objectPosition="center" // objectPosition acts as the CSS property used to position the image inside the container
			/>
			<br />
			<h2>Unoptimized Image</h2>
			<h5>
				to force the image to be loaded even if it is not visible, the image
				will be provided in its original quality, size, and format
			</h5>
			<Image
				src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
				alt="Picture of the nature"
				width={500}
				height={500}
				priority
				unoptimized={true} // to force the image to be loaded even if it's not visible
				// the image will be provided in its original quality, size, and format
			/>
			<br />
			<br />
			<h2>On Loading Complete</h2>
			<h5>
				Once the picture has fully loaded and the placeholder has been deleted,
				this callback function is called
			</h5>
			<Image
				src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
				alt="Picture of the nature"
				width={500}
				height={500}
				priority
				// Once the picture has fully loaded and the placeholder has been deleted, this callback function is called
				onLoadingComplete={(obj) => console.log(obj)}
			/>
			<br />
			<br />
			<Image
				src="https://images.pexels.com/photos/11490756/pexels-photo-11490756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
				alt="Picture of the nature"
				width={500}
				height={500}
				priority
				objectFit="contain"
				// objectPosition="top | down | bottom | center | 200px | 50% | left | right | top left | top right | bottom left | bottom right"
				objectPosition="center" // objectPosition acts as the CSS property used to position the image inside the container
			/>
		</>
	);
}

export default Example1;
