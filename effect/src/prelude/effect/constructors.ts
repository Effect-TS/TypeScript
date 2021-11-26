import * as T from "@effect-ts/core/Effect"

/**
 * @ets_constructor Do
 */
export const Do: T.Effect<unknown, never, {}> = T.do;

/**
 * @ets_constructor succeed
 * @ets_lazy effect
 */
export function succeed<A>(effect: () => A, __trace?: string): T.Effect<unknown, never, A> {
    return T.succeedWith(effect, __trace)
}