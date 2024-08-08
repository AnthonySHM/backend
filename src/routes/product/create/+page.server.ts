import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions = {
  default: async (event) => {
    let data = await event.request.formData()
    await event.locals.db.run('insert into products (title, description) values (?, ?)',
    data.get('title'),
    data.get('description')
                        )
    redirect (303, '/')
  },
} satisfies Actions;
