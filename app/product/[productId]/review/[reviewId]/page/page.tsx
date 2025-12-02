export default async function ReviewPage({
	params,
}: {
	params: Promise<{ reviewId: string }>;
}) {
	const review = (await params).reviewId;
	return <div>Page For Review {review}</div>;
}
