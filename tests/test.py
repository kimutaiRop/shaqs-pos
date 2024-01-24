from typing import List
def sort_colors(input_str: str) -> List[str]:
    color_list = input_str.split()
    color_dict = {}

    for color in color_list:
        color_name = ''.join([c for c in color if not c.isdigit()])
        color_value = int(''.join([c for c in color if c.isdigit()]))
        color_dict[color_name] = color_value

    sorted_colors = sorted(color_dict.keys(), key=lambda x: color_dict[x])
    colors = ""
    for color in sorted_colors:
        colors += color + " "

    colors = colors.strip()
    return colors
if __name__ == "__main__":
    input_str = input().strip()
    result = sort_colors(input_str)
    print(result)
