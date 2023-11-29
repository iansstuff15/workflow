export async function POST(request: Request) {
  try {
    const res = await request.json();
    console.log(res);
    return Response.json({ res });
  } catch (error) {
    return Response.json({ error });
  }
}
