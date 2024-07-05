import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"

export default async function Page() {
	const session = await getServerSession(authOptions)

	if (!session || session.user?.role !== "ADMIN") {
		throw new Error("Unauthorized")
	}
	return <div>Admin Dashboard Page</div>
}
