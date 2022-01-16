import * as T from "@effect-ts/core/Effect";

/**
 * @ets type ets/Effect
 */
export interface Effect<R, E, A> extends T.Effect<R, E, A> { }
/**
 * @ets type ets/EffectOps
 */
export interface EffectOps { }
export const Effect: EffectOps = {};

/**
 * @ets identity ets/Effect
 */
export function identityEffect<R, E, A>(self: Effect<R, E, A>): Effect<R, E, A> {
    return self
}