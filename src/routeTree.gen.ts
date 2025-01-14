/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthenticatedRouteImport } from './routes/_authenticated/route'
import { Route as AuthenticatedIndexImport } from './routes/_authenticated/index'
import { Route as authSignInImport } from './routes/(auth)/sign-in'
import { Route as authOtpImport } from './routes/(auth)/otp'
import { Route as auth500Import } from './routes/(auth)/500'

// Create Virtual Routes

const errors503LazyImport = createFileRoute('/(errors)/503')()
const errors500LazyImport = createFileRoute('/(errors)/500')()
const errors404LazyImport = createFileRoute('/(errors)/404')()
const errors403LazyImport = createFileRoute('/(errors)/403')()
const errors401LazyImport = createFileRoute('/(errors)/401')()
const authSignUpLazyImport = createFileRoute('/(auth)/sign-up')()
const authSignIn2LazyImport = createFileRoute('/(auth)/sign-in-2')()
const authForgotPasswordLazyImport = createFileRoute(
  '/(auth)/forgot-password',
)()
const AuthenticatedSettingsRouteLazyImport = createFileRoute(
  '/_authenticated/settings',
)()
const AuthenticatedReportsRouteLazyImport = createFileRoute(
  '/_authenticated/reports',
)()
const AuthenticatedHelpCenterRouteLazyImport = createFileRoute(
  '/_authenticated/help-center',
)()
const AuthenticatedCampaignRouteLazyImport = createFileRoute(
  '/_authenticated/campaign',
)()
const AuthenticatedUsersIndexLazyImport = createFileRoute(
  '/_authenticated/users/',
)()
const AuthenticatedTasksIndexLazyImport = createFileRoute(
  '/_authenticated/tasks/',
)()
const AuthenticatedSettingsIndexLazyImport = createFileRoute(
  '/_authenticated/settings/',
)()
const AuthenticatedReportsIndexLazyImport = createFileRoute(
  '/_authenticated/reports/',
)()
const AuthenticatedHelpCenterIndexLazyImport = createFileRoute(
  '/_authenticated/help-center/',
)()
const AuthenticatedChatsIndexLazyImport = createFileRoute(
  '/_authenticated/chats/',
)()
const AuthenticatedCampaignIndexLazyImport = createFileRoute(
  '/_authenticated/campaign/',
)()
const AuthenticatedAppsIndexLazyImport = createFileRoute(
  '/_authenticated/apps/',
)()
const AuthenticatedSettingsNotificationsLazyImport = createFileRoute(
  '/_authenticated/settings/notifications',
)()
const AuthenticatedSettingsDisplayLazyImport = createFileRoute(
  '/_authenticated/settings/display',
)()
const AuthenticatedSettingsAppearanceLazyImport = createFileRoute(
  '/_authenticated/settings/appearance',
)()
const AuthenticatedSettingsAccountLazyImport = createFileRoute(
  '/_authenticated/settings/account',
)()

// Create/Update Routes

const AuthenticatedRouteRoute = AuthenticatedRouteImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedIndexRoute = AuthenticatedIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AuthenticatedRouteRoute,
} as any)

const errors503LazyRoute = errors503LazyImport
  .update({
    id: '/(errors)/503',
    path: '/503',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(errors)/503.lazy').then((d) => d.Route))

const errors500LazyRoute = errors500LazyImport
  .update({
    id: '/(errors)/500',
    path: '/500',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(errors)/500.lazy').then((d) => d.Route))

const errors404LazyRoute = errors404LazyImport
  .update({
    id: '/(errors)/404',
    path: '/404',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(errors)/404.lazy').then((d) => d.Route))

const errors403LazyRoute = errors403LazyImport
  .update({
    id: '/(errors)/403',
    path: '/403',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(errors)/403.lazy').then((d) => d.Route))

const errors401LazyRoute = errors401LazyImport
  .update({
    id: '/(errors)/401',
    path: '/401',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(errors)/401.lazy').then((d) => d.Route))

const authSignUpLazyRoute = authSignUpLazyImport
  .update({
    id: '/(auth)/sign-up',
    path: '/sign-up',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(auth)/sign-up.lazy').then((d) => d.Route))

const authSignIn2LazyRoute = authSignIn2LazyImport
  .update({
    id: '/(auth)/sign-in-2',
    path: '/sign-in-2',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(auth)/sign-in-2.lazy').then((d) => d.Route))

const authForgotPasswordLazyRoute = authForgotPasswordLazyImport
  .update({
    id: '/(auth)/forgot-password',
    path: '/forgot-password',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() =>
    import('./routes/(auth)/forgot-password.lazy').then((d) => d.Route),
  )

const AuthenticatedSettingsRouteLazyRoute =
  AuthenticatedSettingsRouteLazyImport.update({
    id: '/settings',
    path: '/settings',
    getParentRoute: () => AuthenticatedRouteRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/settings/route.lazy').then((d) => d.Route),
  )

const AuthenticatedReportsRouteLazyRoute =
  AuthenticatedReportsRouteLazyImport.update({
    id: '/reports',
    path: '/reports',
    getParentRoute: () => AuthenticatedRouteRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/reports/route.lazy').then((d) => d.Route),
  )

const AuthenticatedHelpCenterRouteLazyRoute =
  AuthenticatedHelpCenterRouteLazyImport.update({
    id: '/help-center',
    path: '/help-center',
    getParentRoute: () => AuthenticatedRouteRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/help-center/route.lazy').then(
      (d) => d.Route,
    ),
  )

const AuthenticatedCampaignRouteLazyRoute =
  AuthenticatedCampaignRouteLazyImport.update({
    id: '/campaign',
    path: '/campaign',
    getParentRoute: () => AuthenticatedRouteRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/campaign/route.lazy').then((d) => d.Route),
  )

const authSignInRoute = authSignInImport.update({
  id: '/(auth)/sign-in',
  path: '/sign-in',
  getParentRoute: () => rootRoute,
} as any)

const authOtpRoute = authOtpImport.update({
  id: '/(auth)/otp',
  path: '/otp',
  getParentRoute: () => rootRoute,
} as any)

const auth500Route = auth500Import.update({
  id: '/(auth)/500',
  path: '/500',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedUsersIndexLazyRoute =
  AuthenticatedUsersIndexLazyImport.update({
    id: '/users/',
    path: '/users/',
    getParentRoute: () => AuthenticatedRouteRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/users/index.lazy').then((d) => d.Route),
  )

const AuthenticatedTasksIndexLazyRoute =
  AuthenticatedTasksIndexLazyImport.update({
    id: '/tasks/',
    path: '/tasks/',
    getParentRoute: () => AuthenticatedRouteRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/tasks/index.lazy').then((d) => d.Route),
  )

const AuthenticatedSettingsIndexLazyRoute =
  AuthenticatedSettingsIndexLazyImport.update({
    id: '/',
    path: '/',
    getParentRoute: () => AuthenticatedSettingsRouteLazyRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/settings/index.lazy').then((d) => d.Route),
  )

const AuthenticatedReportsIndexLazyRoute =
  AuthenticatedReportsIndexLazyImport.update({
    id: '/',
    path: '/',
    getParentRoute: () => AuthenticatedReportsRouteLazyRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/reports/index.lazy').then((d) => d.Route),
  )

const AuthenticatedHelpCenterIndexLazyRoute =
  AuthenticatedHelpCenterIndexLazyImport.update({
    id: '/',
    path: '/',
    getParentRoute: () => AuthenticatedHelpCenterRouteLazyRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/help-center/index.lazy').then(
      (d) => d.Route,
    ),
  )

const AuthenticatedChatsIndexLazyRoute =
  AuthenticatedChatsIndexLazyImport.update({
    id: '/chats/',
    path: '/chats/',
    getParentRoute: () => AuthenticatedRouteRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/chats/index.lazy').then((d) => d.Route),
  )

const AuthenticatedCampaignIndexLazyRoute =
  AuthenticatedCampaignIndexLazyImport.update({
    id: '/',
    path: '/',
    getParentRoute: () => AuthenticatedCampaignRouteLazyRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/campaign/index.lazy').then((d) => d.Route),
  )

const AuthenticatedAppsIndexLazyRoute = AuthenticatedAppsIndexLazyImport.update(
  {
    id: '/apps/',
    path: '/apps/',
    getParentRoute: () => AuthenticatedRouteRoute,
  } as any,
).lazy(() =>
  import('./routes/_authenticated/apps/index.lazy').then((d) => d.Route),
)

const AuthenticatedSettingsNotificationsLazyRoute =
  AuthenticatedSettingsNotificationsLazyImport.update({
    id: '/notifications',
    path: '/notifications',
    getParentRoute: () => AuthenticatedSettingsRouteLazyRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/settings/notifications.lazy').then(
      (d) => d.Route,
    ),
  )

const AuthenticatedSettingsDisplayLazyRoute =
  AuthenticatedSettingsDisplayLazyImport.update({
    id: '/display',
    path: '/display',
    getParentRoute: () => AuthenticatedSettingsRouteLazyRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/settings/display.lazy').then(
      (d) => d.Route,
    ),
  )

const AuthenticatedSettingsAppearanceLazyRoute =
  AuthenticatedSettingsAppearanceLazyImport.update({
    id: '/appearance',
    path: '/appearance',
    getParentRoute: () => AuthenticatedSettingsRouteLazyRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/settings/appearance.lazy').then(
      (d) => d.Route,
    ),
  )

const AuthenticatedSettingsAccountLazyRoute =
  AuthenticatedSettingsAccountLazyImport.update({
    id: '/account',
    path: '/account',
    getParentRoute: () => AuthenticatedSettingsRouteLazyRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/settings/account.lazy').then(
      (d) => d.Route,
    ),
  )

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_authenticated': {
      id: '/_authenticated'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticatedRouteImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/500': {
      id: '/(auth)/500'
      path: '/500'
      fullPath: '/500'
      preLoaderRoute: typeof auth500Import
      parentRoute: typeof rootRoute
    }
    '/(auth)/otp': {
      id: '/(auth)/otp'
      path: '/otp'
      fullPath: '/otp'
      preLoaderRoute: typeof authOtpImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/sign-in': {
      id: '/(auth)/sign-in'
      path: '/sign-in'
      fullPath: '/sign-in'
      preLoaderRoute: typeof authSignInImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated/campaign': {
      id: '/_authenticated/campaign'
      path: '/campaign'
      fullPath: '/campaign'
      preLoaderRoute: typeof AuthenticatedCampaignRouteLazyImport
      parentRoute: typeof AuthenticatedRouteImport
    }
    '/_authenticated/help-center': {
      id: '/_authenticated/help-center'
      path: '/help-center'
      fullPath: '/help-center'
      preLoaderRoute: typeof AuthenticatedHelpCenterRouteLazyImport
      parentRoute: typeof AuthenticatedRouteImport
    }
    '/_authenticated/reports': {
      id: '/_authenticated/reports'
      path: '/reports'
      fullPath: '/reports'
      preLoaderRoute: typeof AuthenticatedReportsRouteLazyImport
      parentRoute: typeof AuthenticatedRouteImport
    }
    '/_authenticated/settings': {
      id: '/_authenticated/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof AuthenticatedSettingsRouteLazyImport
      parentRoute: typeof AuthenticatedRouteImport
    }
    '/(auth)/forgot-password': {
      id: '/(auth)/forgot-password'
      path: '/forgot-password'
      fullPath: '/forgot-password'
      preLoaderRoute: typeof authForgotPasswordLazyImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/sign-in-2': {
      id: '/(auth)/sign-in-2'
      path: '/sign-in-2'
      fullPath: '/sign-in-2'
      preLoaderRoute: typeof authSignIn2LazyImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/sign-up': {
      id: '/(auth)/sign-up'
      path: '/sign-up'
      fullPath: '/sign-up'
      preLoaderRoute: typeof authSignUpLazyImport
      parentRoute: typeof rootRoute
    }
    '/(errors)/401': {
      id: '/(errors)/401'
      path: '/401'
      fullPath: '/401'
      preLoaderRoute: typeof errors401LazyImport
      parentRoute: typeof rootRoute
    }
    '/(errors)/403': {
      id: '/(errors)/403'
      path: '/403'
      fullPath: '/403'
      preLoaderRoute: typeof errors403LazyImport
      parentRoute: typeof rootRoute
    }
    '/(errors)/404': {
      id: '/(errors)/404'
      path: '/404'
      fullPath: '/404'
      preLoaderRoute: typeof errors404LazyImport
      parentRoute: typeof rootRoute
    }
    '/(errors)/500': {
      id: '/(errors)/500'
      path: '/500'
      fullPath: '/500'
      preLoaderRoute: typeof errors500LazyImport
      parentRoute: typeof rootRoute
    }
    '/(errors)/503': {
      id: '/(errors)/503'
      path: '/503'
      fullPath: '/503'
      preLoaderRoute: typeof errors503LazyImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated/': {
      id: '/_authenticated/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof AuthenticatedIndexImport
      parentRoute: typeof AuthenticatedRouteImport
    }
    '/_authenticated/settings/account': {
      id: '/_authenticated/settings/account'
      path: '/account'
      fullPath: '/settings/account'
      preLoaderRoute: typeof AuthenticatedSettingsAccountLazyImport
      parentRoute: typeof AuthenticatedSettingsRouteLazyImport
    }
    '/_authenticated/settings/appearance': {
      id: '/_authenticated/settings/appearance'
      path: '/appearance'
      fullPath: '/settings/appearance'
      preLoaderRoute: typeof AuthenticatedSettingsAppearanceLazyImport
      parentRoute: typeof AuthenticatedSettingsRouteLazyImport
    }
    '/_authenticated/settings/display': {
      id: '/_authenticated/settings/display'
      path: '/display'
      fullPath: '/settings/display'
      preLoaderRoute: typeof AuthenticatedSettingsDisplayLazyImport
      parentRoute: typeof AuthenticatedSettingsRouteLazyImport
    }
    '/_authenticated/settings/notifications': {
      id: '/_authenticated/settings/notifications'
      path: '/notifications'
      fullPath: '/settings/notifications'
      preLoaderRoute: typeof AuthenticatedSettingsNotificationsLazyImport
      parentRoute: typeof AuthenticatedSettingsRouteLazyImport
    }
    '/_authenticated/apps/': {
      id: '/_authenticated/apps/'
      path: '/apps'
      fullPath: '/apps'
      preLoaderRoute: typeof AuthenticatedAppsIndexLazyImport
      parentRoute: typeof AuthenticatedRouteImport
    }
    '/_authenticated/campaign/': {
      id: '/_authenticated/campaign/'
      path: '/'
      fullPath: '/campaign/'
      preLoaderRoute: typeof AuthenticatedCampaignIndexLazyImport
      parentRoute: typeof AuthenticatedCampaignRouteLazyImport
    }
    '/_authenticated/chats/': {
      id: '/_authenticated/chats/'
      path: '/chats'
      fullPath: '/chats'
      preLoaderRoute: typeof AuthenticatedChatsIndexLazyImport
      parentRoute: typeof AuthenticatedRouteImport
    }
    '/_authenticated/help-center/': {
      id: '/_authenticated/help-center/'
      path: '/'
      fullPath: '/help-center/'
      preLoaderRoute: typeof AuthenticatedHelpCenterIndexLazyImport
      parentRoute: typeof AuthenticatedHelpCenterRouteLazyImport
    }
    '/_authenticated/reports/': {
      id: '/_authenticated/reports/'
      path: '/'
      fullPath: '/reports/'
      preLoaderRoute: typeof AuthenticatedReportsIndexLazyImport
      parentRoute: typeof AuthenticatedReportsRouteLazyImport
    }
    '/_authenticated/settings/': {
      id: '/_authenticated/settings/'
      path: '/'
      fullPath: '/settings/'
      preLoaderRoute: typeof AuthenticatedSettingsIndexLazyImport
      parentRoute: typeof AuthenticatedSettingsRouteLazyImport
    }
    '/_authenticated/tasks/': {
      id: '/_authenticated/tasks/'
      path: '/tasks'
      fullPath: '/tasks'
      preLoaderRoute: typeof AuthenticatedTasksIndexLazyImport
      parentRoute: typeof AuthenticatedRouteImport
    }
    '/_authenticated/users/': {
      id: '/_authenticated/users/'
      path: '/users'
      fullPath: '/users'
      preLoaderRoute: typeof AuthenticatedUsersIndexLazyImport
      parentRoute: typeof AuthenticatedRouteImport
    }
  }
}

// Create and export the route tree

interface AuthenticatedCampaignRouteLazyRouteChildren {
  AuthenticatedCampaignIndexLazyRoute: typeof AuthenticatedCampaignIndexLazyRoute
}

const AuthenticatedCampaignRouteLazyRouteChildren: AuthenticatedCampaignRouteLazyRouteChildren =
  {
    AuthenticatedCampaignIndexLazyRoute: AuthenticatedCampaignIndexLazyRoute,
  }

const AuthenticatedCampaignRouteLazyRouteWithChildren =
  AuthenticatedCampaignRouteLazyRoute._addFileChildren(
    AuthenticatedCampaignRouteLazyRouteChildren,
  )

interface AuthenticatedHelpCenterRouteLazyRouteChildren {
  AuthenticatedHelpCenterIndexLazyRoute: typeof AuthenticatedHelpCenterIndexLazyRoute
}

const AuthenticatedHelpCenterRouteLazyRouteChildren: AuthenticatedHelpCenterRouteLazyRouteChildren =
  {
    AuthenticatedHelpCenterIndexLazyRoute:
      AuthenticatedHelpCenterIndexLazyRoute,
  }

const AuthenticatedHelpCenterRouteLazyRouteWithChildren =
  AuthenticatedHelpCenterRouteLazyRoute._addFileChildren(
    AuthenticatedHelpCenterRouteLazyRouteChildren,
  )

interface AuthenticatedReportsRouteLazyRouteChildren {
  AuthenticatedReportsIndexLazyRoute: typeof AuthenticatedReportsIndexLazyRoute
}

const AuthenticatedReportsRouteLazyRouteChildren: AuthenticatedReportsRouteLazyRouteChildren =
  {
    AuthenticatedReportsIndexLazyRoute: AuthenticatedReportsIndexLazyRoute,
  }

const AuthenticatedReportsRouteLazyRouteWithChildren =
  AuthenticatedReportsRouteLazyRoute._addFileChildren(
    AuthenticatedReportsRouteLazyRouteChildren,
  )

interface AuthenticatedSettingsRouteLazyRouteChildren {
  AuthenticatedSettingsAccountLazyRoute: typeof AuthenticatedSettingsAccountLazyRoute
  AuthenticatedSettingsAppearanceLazyRoute: typeof AuthenticatedSettingsAppearanceLazyRoute
  AuthenticatedSettingsDisplayLazyRoute: typeof AuthenticatedSettingsDisplayLazyRoute
  AuthenticatedSettingsNotificationsLazyRoute: typeof AuthenticatedSettingsNotificationsLazyRoute
  AuthenticatedSettingsIndexLazyRoute: typeof AuthenticatedSettingsIndexLazyRoute
}

const AuthenticatedSettingsRouteLazyRouteChildren: AuthenticatedSettingsRouteLazyRouteChildren =
  {
    AuthenticatedSettingsAccountLazyRoute:
      AuthenticatedSettingsAccountLazyRoute,
    AuthenticatedSettingsAppearanceLazyRoute:
      AuthenticatedSettingsAppearanceLazyRoute,
    AuthenticatedSettingsDisplayLazyRoute:
      AuthenticatedSettingsDisplayLazyRoute,
    AuthenticatedSettingsNotificationsLazyRoute:
      AuthenticatedSettingsNotificationsLazyRoute,
    AuthenticatedSettingsIndexLazyRoute: AuthenticatedSettingsIndexLazyRoute,
  }

const AuthenticatedSettingsRouteLazyRouteWithChildren =
  AuthenticatedSettingsRouteLazyRoute._addFileChildren(
    AuthenticatedSettingsRouteLazyRouteChildren,
  )

interface AuthenticatedRouteRouteChildren {
  AuthenticatedCampaignRouteLazyRoute: typeof AuthenticatedCampaignRouteLazyRouteWithChildren
  AuthenticatedHelpCenterRouteLazyRoute: typeof AuthenticatedHelpCenterRouteLazyRouteWithChildren
  AuthenticatedReportsRouteLazyRoute: typeof AuthenticatedReportsRouteLazyRouteWithChildren
  AuthenticatedSettingsRouteLazyRoute: typeof AuthenticatedSettingsRouteLazyRouteWithChildren
  AuthenticatedIndexRoute: typeof AuthenticatedIndexRoute
  AuthenticatedAppsIndexLazyRoute: typeof AuthenticatedAppsIndexLazyRoute
  AuthenticatedChatsIndexLazyRoute: typeof AuthenticatedChatsIndexLazyRoute
  AuthenticatedTasksIndexLazyRoute: typeof AuthenticatedTasksIndexLazyRoute
  AuthenticatedUsersIndexLazyRoute: typeof AuthenticatedUsersIndexLazyRoute
}

const AuthenticatedRouteRouteChildren: AuthenticatedRouteRouteChildren = {
  AuthenticatedCampaignRouteLazyRoute:
    AuthenticatedCampaignRouteLazyRouteWithChildren,
  AuthenticatedHelpCenterRouteLazyRoute:
    AuthenticatedHelpCenterRouteLazyRouteWithChildren,
  AuthenticatedReportsRouteLazyRoute:
    AuthenticatedReportsRouteLazyRouteWithChildren,
  AuthenticatedSettingsRouteLazyRoute:
    AuthenticatedSettingsRouteLazyRouteWithChildren,
  AuthenticatedIndexRoute: AuthenticatedIndexRoute,
  AuthenticatedAppsIndexLazyRoute: AuthenticatedAppsIndexLazyRoute,
  AuthenticatedChatsIndexLazyRoute: AuthenticatedChatsIndexLazyRoute,
  AuthenticatedTasksIndexLazyRoute: AuthenticatedTasksIndexLazyRoute,
  AuthenticatedUsersIndexLazyRoute: AuthenticatedUsersIndexLazyRoute,
}

const AuthenticatedRouteRouteWithChildren =
  AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof AuthenticatedRouteRouteWithChildren
  '/500': typeof errors500LazyRoute
  '/otp': typeof authOtpRoute
  '/sign-in': typeof authSignInRoute
  '/campaign': typeof AuthenticatedCampaignRouteLazyRouteWithChildren
  '/help-center': typeof AuthenticatedHelpCenterRouteLazyRouteWithChildren
  '/reports': typeof AuthenticatedReportsRouteLazyRouteWithChildren
  '/settings': typeof AuthenticatedSettingsRouteLazyRouteWithChildren
  '/forgot-password': typeof authForgotPasswordLazyRoute
  '/sign-in-2': typeof authSignIn2LazyRoute
  '/sign-up': typeof authSignUpLazyRoute
  '/401': typeof errors401LazyRoute
  '/403': typeof errors403LazyRoute
  '/404': typeof errors404LazyRoute
  '/503': typeof errors503LazyRoute
  '/': typeof AuthenticatedIndexRoute
  '/settings/account': typeof AuthenticatedSettingsAccountLazyRoute
  '/settings/appearance': typeof AuthenticatedSettingsAppearanceLazyRoute
  '/settings/display': typeof AuthenticatedSettingsDisplayLazyRoute
  '/settings/notifications': typeof AuthenticatedSettingsNotificationsLazyRoute
  '/apps': typeof AuthenticatedAppsIndexLazyRoute
  '/campaign/': typeof AuthenticatedCampaignIndexLazyRoute
  '/chats': typeof AuthenticatedChatsIndexLazyRoute
  '/help-center/': typeof AuthenticatedHelpCenterIndexLazyRoute
  '/reports/': typeof AuthenticatedReportsIndexLazyRoute
  '/settings/': typeof AuthenticatedSettingsIndexLazyRoute
  '/tasks': typeof AuthenticatedTasksIndexLazyRoute
  '/users': typeof AuthenticatedUsersIndexLazyRoute
}

export interface FileRoutesByTo {
  '/500': typeof errors500LazyRoute
  '/otp': typeof authOtpRoute
  '/sign-in': typeof authSignInRoute
  '/forgot-password': typeof authForgotPasswordLazyRoute
  '/sign-in-2': typeof authSignIn2LazyRoute
  '/sign-up': typeof authSignUpLazyRoute
  '/401': typeof errors401LazyRoute
  '/403': typeof errors403LazyRoute
  '/404': typeof errors404LazyRoute
  '/503': typeof errors503LazyRoute
  '/': typeof AuthenticatedIndexRoute
  '/settings/account': typeof AuthenticatedSettingsAccountLazyRoute
  '/settings/appearance': typeof AuthenticatedSettingsAppearanceLazyRoute
  '/settings/display': typeof AuthenticatedSettingsDisplayLazyRoute
  '/settings/notifications': typeof AuthenticatedSettingsNotificationsLazyRoute
  '/apps': typeof AuthenticatedAppsIndexLazyRoute
  '/campaign': typeof AuthenticatedCampaignIndexLazyRoute
  '/chats': typeof AuthenticatedChatsIndexLazyRoute
  '/help-center': typeof AuthenticatedHelpCenterIndexLazyRoute
  '/reports': typeof AuthenticatedReportsIndexLazyRoute
  '/settings': typeof AuthenticatedSettingsIndexLazyRoute
  '/tasks': typeof AuthenticatedTasksIndexLazyRoute
  '/users': typeof AuthenticatedUsersIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_authenticated': typeof AuthenticatedRouteRouteWithChildren
  '/(auth)/500': typeof auth500Route
  '/(auth)/otp': typeof authOtpRoute
  '/(auth)/sign-in': typeof authSignInRoute
  '/_authenticated/campaign': typeof AuthenticatedCampaignRouteLazyRouteWithChildren
  '/_authenticated/help-center': typeof AuthenticatedHelpCenterRouteLazyRouteWithChildren
  '/_authenticated/reports': typeof AuthenticatedReportsRouteLazyRouteWithChildren
  '/_authenticated/settings': typeof AuthenticatedSettingsRouteLazyRouteWithChildren
  '/(auth)/forgot-password': typeof authForgotPasswordLazyRoute
  '/(auth)/sign-in-2': typeof authSignIn2LazyRoute
  '/(auth)/sign-up': typeof authSignUpLazyRoute
  '/(errors)/401': typeof errors401LazyRoute
  '/(errors)/403': typeof errors403LazyRoute
  '/(errors)/404': typeof errors404LazyRoute
  '/(errors)/500': typeof errors500LazyRoute
  '/(errors)/503': typeof errors503LazyRoute
  '/_authenticated/': typeof AuthenticatedIndexRoute
  '/_authenticated/settings/account': typeof AuthenticatedSettingsAccountLazyRoute
  '/_authenticated/settings/appearance': typeof AuthenticatedSettingsAppearanceLazyRoute
  '/_authenticated/settings/display': typeof AuthenticatedSettingsDisplayLazyRoute
  '/_authenticated/settings/notifications': typeof AuthenticatedSettingsNotificationsLazyRoute
  '/_authenticated/apps/': typeof AuthenticatedAppsIndexLazyRoute
  '/_authenticated/campaign/': typeof AuthenticatedCampaignIndexLazyRoute
  '/_authenticated/chats/': typeof AuthenticatedChatsIndexLazyRoute
  '/_authenticated/help-center/': typeof AuthenticatedHelpCenterIndexLazyRoute
  '/_authenticated/reports/': typeof AuthenticatedReportsIndexLazyRoute
  '/_authenticated/settings/': typeof AuthenticatedSettingsIndexLazyRoute
  '/_authenticated/tasks/': typeof AuthenticatedTasksIndexLazyRoute
  '/_authenticated/users/': typeof AuthenticatedUsersIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/500'
    | '/otp'
    | '/sign-in'
    | '/campaign'
    | '/help-center'
    | '/reports'
    | '/settings'
    | '/forgot-password'
    | '/sign-in-2'
    | '/sign-up'
    | '/401'
    | '/403'
    | '/404'
    | '/503'
    | '/'
    | '/settings/account'
    | '/settings/appearance'
    | '/settings/display'
    | '/settings/notifications'
    | '/apps'
    | '/campaign/'
    | '/chats'
    | '/help-center/'
    | '/reports/'
    | '/settings/'
    | '/tasks'
    | '/users'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/500'
    | '/otp'
    | '/sign-in'
    | '/forgot-password'
    | '/sign-in-2'
    | '/sign-up'
    | '/401'
    | '/403'
    | '/404'
    | '/503'
    | '/'
    | '/settings/account'
    | '/settings/appearance'
    | '/settings/display'
    | '/settings/notifications'
    | '/apps'
    | '/campaign'
    | '/chats'
    | '/help-center'
    | '/reports'
    | '/settings'
    | '/tasks'
    | '/users'
  id:
    | '__root__'
    | '/_authenticated'
    | '/(auth)/500'
    | '/(auth)/otp'
    | '/(auth)/sign-in'
    | '/_authenticated/campaign'
    | '/_authenticated/help-center'
    | '/_authenticated/reports'
    | '/_authenticated/settings'
    | '/(auth)/forgot-password'
    | '/(auth)/sign-in-2'
    | '/(auth)/sign-up'
    | '/(errors)/401'
    | '/(errors)/403'
    | '/(errors)/404'
    | '/(errors)/500'
    | '/(errors)/503'
    | '/_authenticated/'
    | '/_authenticated/settings/account'
    | '/_authenticated/settings/appearance'
    | '/_authenticated/settings/display'
    | '/_authenticated/settings/notifications'
    | '/_authenticated/apps/'
    | '/_authenticated/campaign/'
    | '/_authenticated/chats/'
    | '/_authenticated/help-center/'
    | '/_authenticated/reports/'
    | '/_authenticated/settings/'
    | '/_authenticated/tasks/'
    | '/_authenticated/users/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AuthenticatedRouteRoute: typeof AuthenticatedRouteRouteWithChildren
  auth500Route: typeof auth500Route
  authOtpRoute: typeof authOtpRoute
  authSignInRoute: typeof authSignInRoute
  authForgotPasswordLazyRoute: typeof authForgotPasswordLazyRoute
  authSignIn2LazyRoute: typeof authSignIn2LazyRoute
  authSignUpLazyRoute: typeof authSignUpLazyRoute
  errors401LazyRoute: typeof errors401LazyRoute
  errors403LazyRoute: typeof errors403LazyRoute
  errors404LazyRoute: typeof errors404LazyRoute
  errors500LazyRoute: typeof errors500LazyRoute
  errors503LazyRoute: typeof errors503LazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  AuthenticatedRouteRoute: AuthenticatedRouteRouteWithChildren,
  auth500Route: auth500Route,
  authOtpRoute: authOtpRoute,
  authSignInRoute: authSignInRoute,
  authForgotPasswordLazyRoute: authForgotPasswordLazyRoute,
  authSignIn2LazyRoute: authSignIn2LazyRoute,
  authSignUpLazyRoute: authSignUpLazyRoute,
  errors401LazyRoute: errors401LazyRoute,
  errors403LazyRoute: errors403LazyRoute,
  errors404LazyRoute: errors404LazyRoute,
  errors500LazyRoute: errors500LazyRoute,
  errors503LazyRoute: errors503LazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_authenticated",
        "/(auth)/500",
        "/(auth)/otp",
        "/(auth)/sign-in",
        "/(auth)/forgot-password",
        "/(auth)/sign-in-2",
        "/(auth)/sign-up",
        "/(errors)/401",
        "/(errors)/403",
        "/(errors)/404",
        "/(errors)/500",
        "/(errors)/503"
      ]
    },
    "/_authenticated": {
      "filePath": "_authenticated/route.tsx",
      "children": [
        "/_authenticated/campaign",
        "/_authenticated/help-center",
        "/_authenticated/reports",
        "/_authenticated/settings",
        "/_authenticated/",
        "/_authenticated/apps/",
        "/_authenticated/chats/",
        "/_authenticated/tasks/",
        "/_authenticated/users/"
      ]
    },
    "/(auth)/500": {
      "filePath": "(auth)/500.tsx"
    },
    "/(auth)/otp": {
      "filePath": "(auth)/otp.tsx"
    },
    "/(auth)/sign-in": {
      "filePath": "(auth)/sign-in.tsx"
    },
    "/_authenticated/campaign": {
      "filePath": "_authenticated/campaign/route.lazy.tsx",
      "parent": "/_authenticated",
      "children": [
        "/_authenticated/campaign/"
      ]
    },
    "/_authenticated/help-center": {
      "filePath": "_authenticated/help-center/route.lazy.tsx",
      "parent": "/_authenticated",
      "children": [
        "/_authenticated/help-center/"
      ]
    },
    "/_authenticated/reports": {
      "filePath": "_authenticated/reports/route.lazy.tsx",
      "parent": "/_authenticated",
      "children": [
        "/_authenticated/reports/"
      ]
    },
    "/_authenticated/settings": {
      "filePath": "_authenticated/settings/route.lazy.tsx",
      "parent": "/_authenticated",
      "children": [
        "/_authenticated/settings/account",
        "/_authenticated/settings/appearance",
        "/_authenticated/settings/display",
        "/_authenticated/settings/notifications",
        "/_authenticated/settings/"
      ]
    },
    "/(auth)/forgot-password": {
      "filePath": "(auth)/forgot-password.lazy.tsx"
    },
    "/(auth)/sign-in-2": {
      "filePath": "(auth)/sign-in-2.lazy.tsx"
    },
    "/(auth)/sign-up": {
      "filePath": "(auth)/sign-up.lazy.tsx"
    },
    "/(errors)/401": {
      "filePath": "(errors)/401.lazy.tsx"
    },
    "/(errors)/403": {
      "filePath": "(errors)/403.lazy.tsx"
    },
    "/(errors)/404": {
      "filePath": "(errors)/404.lazy.tsx"
    },
    "/(errors)/500": {
      "filePath": "(errors)/500.lazy.tsx"
    },
    "/(errors)/503": {
      "filePath": "(errors)/503.lazy.tsx"
    },
    "/_authenticated/": {
      "filePath": "_authenticated/index.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/settings/account": {
      "filePath": "_authenticated/settings/account.lazy.tsx",
      "parent": "/_authenticated/settings"
    },
    "/_authenticated/settings/appearance": {
      "filePath": "_authenticated/settings/appearance.lazy.tsx",
      "parent": "/_authenticated/settings"
    },
    "/_authenticated/settings/display": {
      "filePath": "_authenticated/settings/display.lazy.tsx",
      "parent": "/_authenticated/settings"
    },
    "/_authenticated/settings/notifications": {
      "filePath": "_authenticated/settings/notifications.lazy.tsx",
      "parent": "/_authenticated/settings"
    },
    "/_authenticated/apps/": {
      "filePath": "_authenticated/apps/index.lazy.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/campaign/": {
      "filePath": "_authenticated/campaign/index.lazy.tsx",
      "parent": "/_authenticated/campaign"
    },
    "/_authenticated/chats/": {
      "filePath": "_authenticated/chats/index.lazy.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/help-center/": {
      "filePath": "_authenticated/help-center/index.lazy.tsx",
      "parent": "/_authenticated/help-center"
    },
    "/_authenticated/reports/": {
      "filePath": "_authenticated/reports/index.lazy.tsx",
      "parent": "/_authenticated/reports"
    },
    "/_authenticated/settings/": {
      "filePath": "_authenticated/settings/index.lazy.tsx",
      "parent": "/_authenticated/settings"
    },
    "/_authenticated/tasks/": {
      "filePath": "_authenticated/tasks/index.lazy.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/users/": {
      "filePath": "_authenticated/users/index.lazy.tsx",
      "parent": "/_authenticated"
    }
  }
}
ROUTE_MANIFEST_END */
