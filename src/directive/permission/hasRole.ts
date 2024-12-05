import useUserStore from '@/stores/user'

export default {
  mounted(el: any, binding: any, vnode: any) {
    const { value } = binding
    const super_admin = 'admin'
    const roles = useUserStore().roles

    if (value && value instanceof Array && value.length > 0) {
      const theRoleArray = value

      const hasRole = roles.some((role: string) => {
        return super_admin === role || theRoleArray.includes(role)
      })

      if (!hasRole) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error(`请设置角色权限标签值`)
    }
  },
}
