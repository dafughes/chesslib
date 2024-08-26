/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function __wbg_board_free(a: number, b: number): void;
export function board_new(): number;
export function board_default(): number;
export function board_from_fen(a: number, b: number): number;
export function board_fen(a: number, b: number): void;
export function board_at(a: number, b: number): number;
export function board_put(a: number, b: number, c: number): void;
export function board_color_to_move(a: number): number;
export function board_fullmove_number(a: number): number;
export function board_halfmove_clock(a: number): number;
export function board_can_castle_kingside(a: number, b: number): number;
export function board_can_castle_queenside(a: number, b: number): number;
export function board_en_passant_square(a: number): number;
export function board_set_color_to_move(a: number, b: number): void;
export function board_set_fullmove_number(a: number, b: number): void;
export function board_increment_fullmove_number(a: number): void;
export function board_set_halfmove_clock(a: number, b: number): void;
export function board_add_castling_kingside(a: number, b: number): void;
export function board_add_castling_queenside(a: number, b: number): void;
export function board_set_en_passant_square(a: number, b: number): void;
export function board_do_move(a: number, b: number): number;
export function board_is_in_check(a: number): number;
export function board_legal_moves(a: number, b: number): void;
export function __wbg_move_free(a: number, b: number): void;
export function move_new(a: number, b: number, c: number): number;
export function move_from(a: number): number;
export function move_to(a: number): number;
export function move_kind(a: number): number;
export function move_promotion_kind(a: number): number;
export function move_null(): number;
export function __wbg_searchparams_free(a: number, b: number): void;
export function __wbg_get_searchparams_wtime(a: number): number;
export function __wbg_set_searchparams_wtime(a: number, b: number): void;
export function __wbg_get_searchparams_btime(a: number): number;
export function __wbg_set_searchparams_btime(a: number, b: number): void;
export function __wbg_get_searchparams_winc(a: number): number;
export function __wbg_set_searchparams_winc(a: number, b: number): void;
export function __wbg_get_searchparams_binc(a: number): number;
export function __wbg_set_searchparams_binc(a: number, b: number): void;
export function __wbg_get_searchparams_movestogo(a: number): number;
export function __wbg_set_searchparams_movestogo(a: number, b: number): void;
export function __wbg_get_searchparams_depth(a: number): number;
export function __wbg_set_searchparams_depth(a: number, b: number): void;
export function __wbg_get_searchparams_nodes(a: number): number;
export function __wbg_set_searchparams_nodes(a: number, b: number): void;
export function __wbg_get_searchparams_mate(a: number): number;
export function __wbg_set_searchparams_mate(a: number, b: number): void;
export function __wbg_get_searchparams_movetime(a: number): number;
export function __wbg_set_searchparams_movetime(a: number, b: number): void;
export function __wbg_get_searchparams_infinite(a: number): number;
export function __wbg_set_searchparams_infinite(a: number, b: number): void;
export function searchparams_new(): number;
export function search(a: number, b: number): number;
export function square_new(a: number, b: number): number;
export function square_rank(a: number): number;
export function square_file(a: number): number;
export function square_from_index(a: number): number;
export function square_to_index(a: number): number;
export function __wbg_square_free(a: number, b: number): void;
export function __wbindgen_malloc(a: number, b: number): number;
export function __wbindgen_realloc(a: number, b: number, c: number, d: number): number;
export function __wbindgen_add_to_stack_pointer(a: number): number;
export function __wbindgen_free(a: number, b: number, c: number): void;
