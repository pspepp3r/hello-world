export default async function ProductDetails({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const productId = (await params).id;
	return <div>Details about product {productId}</div>;
}
