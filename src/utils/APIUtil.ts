export async function requestAPI<T>(url: string, request?: unknown): Promise<T> {
  const res = await fetch(`https://junctionx.azurewebsites.net${url}`, {
    method: 'POST',
    body: JSON.stringify(request),
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  return await res.json();
}
