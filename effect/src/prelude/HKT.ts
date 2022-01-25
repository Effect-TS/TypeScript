export interface HKT {
  readonly A?: unknown
  readonly type?: unknown
}

export declare const URI: unique symbol;

export interface Typeclass<F extends HKT> {
  readonly [URI]?: F
}

export type Kind<F extends HKT, A> = F extends { readonly type: unknown } ? (F & { A: A })['type'] : { readonly _F: F, readonly _A: A }