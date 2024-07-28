// 'use client';
import Link from 'next/link';

export default function NotFoundPage() {
	return (
		<div>
			<h2 className="text-center">404 Not Found</h2>
			<p>
				<Link href="/">홈으로 이동</Link>
			</p>
		</div>
	);
}
