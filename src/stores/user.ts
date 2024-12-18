interface User {
  name: string
  phone: string
}

const useUserStore = defineStore(
  'user',
  () => {
    const user = ref<User>({ name: '赖晓飞', phone: '13094404964' })
    const roles = ref(['common'] as string[])
    const permissions = ref(['system:user:add'] as string[])

    function logOut() {
      user.value = {} as User
      return Promise.resolve()
    }

    return { user, roles, permissions, logOut }
  },
  {
    persist: true,
  },
)

export default useUserStore
