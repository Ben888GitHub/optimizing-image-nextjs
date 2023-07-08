import Image from 'next/image';

// * With Tailwind

const RGL = () => {
	const items = new Array(12).fill('x');
	return (
		<div className="m-2 grid grid-cols-12 gap-2">
			{items.map((item, idx) => {
				const randomId = (Math.random() * 100).toFixed(0);
				return (
					<div
						key={idx}
						className="col-span-6 md:col-span-4 lg:col-span-3 aspect-video w-full bg-gray-100 relative"
					>
						<Image
							src={`https://picsum.photos/id/${randomId}/640/340`}
							layout="fill"
							objectFit="cover"
							// priority
							alt="al"
						/>
					</div>
				);
			})}
		</div>
	);
};

export default RGL;
