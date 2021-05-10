import { error } from '~/plugins/swal'

export default function ({ redirect, store }) {
  // console.log(ctx)
  if (!store.state.auth.isLoggedIn) {
    error.fire('Porfavor haga Login')
    redirect('/login')
  }
}
