const testCases = [
    // cpp test cases
    {
        name: 'cpp : hello world',
        reqObject: {
            language: 'cpp',
            script:
                '#include<bits/stdc++.h>\n' +
                'using namespace std;\n' +
                'int main(){\n' +
                '    cout << "hello world";\n' +
                'return 0;\n' +
                '}\n',
        },
        expectedResponse: {
            val: 'hello world',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'cpp : print stdin',
        reqObject: {
            language: 'cpp',
            script:
                '#include<bits/stdc++.h>\n\n' +
                'using namespace std;\n' +
                'int main(){\n\n' +
                '    int a;\n' +
                '    while(cin >> a){\n' +
                '        cout << a << endl;\n' +
                '    }\n' +
                '    return 0;\n\n' +
                '}\n',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1\n2\n3\n',
            status: 200,
            error: 0,
        },

    },
    {
        name: 'cpp : array manipulation',
        reqObject: {
            language: 'cpp',
            script:
                '#include <iostream>\n' +
                'using namespace std;\n' +
                'int main() {\n' +
                '    int arr[] = {1, 2, 3, 4, 5};\n' +
                '    for (int i = 0; i < 5; ++i) {\n' +
                '        cout << arr[i] << " ";\n' +
                '    }\n' +
                '    return 0;\n' +
                '}\n',
        },
        expectedResponse: {
            val: '1 2 3 4 5 ',
            status: 200,
            error: 0,
        },
    },
    // nodejs test cases
    {
        name: 'nodejs : hello world',
        reqObject: {
            language: 'nodejs',
            script: 'console.log(\'hello world\')',
        },
        expectedResponse: {
            val: 'hello world\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'nodejs : print stdin',
        reqObject: {
            language: 'nodejs',
            script:
                'process.stdin.setEncoding(\'utf8\'); \n ' +
                'process.stdin.on(\'data\', (input) => { \n ' +
                '  console.log(input); \n ' +
                ' \n ' +
                '}); \n ',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1 2 3\n',
            status: 200,
            error: 0,
        },
    },
    
    // python test cases
    {
        name: 'python : hello world',
        reqObject: {
            language: 'python',
            script: 'print(\'hello world\')',
        },
        expectedResponse: {
            val: 'hello world\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'python : print stdin',
        reqObject: {
            language: 'python',
            script:
                'try:\n' +
                '    while(True):\n' +
                '        line = input()\n' +
                '        if not line:\n' +
                '            break\n' +
                '        print(line)\n' +
                'except EOFError:\n' +
                '    pass',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1 2 3\n',
            status: 200,
            error: 0,
        },
    },
    // c test cases
    {
        name: 'c : hello world',
        reqObject: {
            language: 'c',
            script:
                '#include<stdio.h>\n\n' +
                'int main(){\n\n' +
                '    printf("hello world");\n' +
                '    return 0;\n' +
                '}\n',
        },
        expectedResponse: {
            val: 'hello world',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'c : print stdin',
        reqObject: {
            language: 'c',
            script:
                '#include <stdio.h>\n' +
                'int main() {\n' +
                '    int number;\n' +
                '    while (scanf("%d", &number) == 1) {\n' +
                '        printf("%d\\n", number);\n' +
                '    } \n' +
                '    return 0;\n' +
                '}',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1\n2\n3\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'c : string reversal',
        reqObject: {
            language: 'c',
            script:
                '#include <stdio.h>\n' +
                '#include <string.h>\n' +
                'int main() {\n' +
                '    char str[] = "hello";\n' +
                '    int n = strlen(str);\n' +
                '    for (int i = n-1; i >= 0; i--) {\n' +
                '        printf("%c", str[i]);\n' +
                '    }\n' +
                '    return 0;\n' +
                '}\n',
        },
        expectedResponse: {
            val: 'olleh',
            status: 200,
            error: 0,
        },
    },
    // java test cases
    {
        name: 'java : print stdin',
        reqObject: {
            language: 'java',
            script:
                'import java.util.Scanner;\n' +
                'public class Solution {\n' +
                '    public static void main(String[] args) {\n' +
                '        System.out.println("hello world");\n' +
                '    }\n' +
                '}\n',
        },
        expectedResponse: {
            val: 'hello world\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'java : print stdin',
        reqObject: {
            language: 'java',
            script:
                'import java.util.Scanner;\n' +
                'public class Solution {\n' +
                '    public static void main(String[] args) {\n' +
                '        Scanner scanner = new Scanner(System.in);\n' +
                '        while (scanner.hasNextInt()) {\n' +
                '            int number = scanner.nextInt();\n' +
                '            System.out.println(number);\n' +
                '        } \n' +
                '        scanner.close();\n' +
                '    }\n' +
                '}\n',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1\n2\n3\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'java : reverse array',
        reqObject: {
            language: 'java',
            script: `
                import java.util.Arrays;
                import java.util.Collections;
                public class Solution {
                    public static void main(String[] args) {
                        Integer[] arr = {1, 2, 3, 4, 5};
                        Collections.reverse(Arrays.asList(arr));
                        System.out.println(Arrays.toString(arr));
                    }
                }
            `,
        },
        expectedResponse: {
            val: '[5, 4, 3, 2, 1]\n',
            status: 200,
            error: 0,
        },
    },
    // ruby test cases
    {
        name: 'ruby : print hello world',
        reqObject: {
            language: 'ruby',
            script:
                'print "hello world"',
        },
        expectedResponse: {
            val: 'hello world',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'ruby : print stdin',
        reqObject: {
            language: 'ruby',
            script:
                'user_input = gets.chomp\n' +
                'puts user_input',
            stdin: '10\n',
        },
        expectedResponse: {
            val: '10\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'ruby : file reading',
        reqObject: {
            language: 'ruby',
            script:
                'File.open("test.txt", "w") { |f| f.write("Hello World") }\n' +
                'puts File.read("test.txt")',
        },
        expectedResponse: {
            val: 'Hello World\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'TLE test',
        reqObject: {
            language: 'nodejs',
            script: 'for(let i=0 ; ; ){i++}',
        },
        expectedResponse: {
            val: 'Time limit exceeded',
            status: 200,
            error: 1,
        },
    },
    {
        name: 'MLE test',
        reqObject: {
            language: 'python',
            script: 'one_gb_data = bytearray(1000 * 1024 * 1024)',
        },
        expectedResponse: {
            val: 'Memory limit exceeded',
            status: 200,
            error: 1,
        },
    },
    {
        name: 'MLE test 2',
        reqObject: {
            language: 'python',
            script:
                'import time\n' +
                'def consume_memory(target_mb, duration_sec):\n' +
                '    float_size = 8\n' +
                '    floats_per_mb = (1024 * 1024) // float_size\n' +
                '    total_floats = target_mb * floats_per_mb\n' +
                '    iterations = int(duration_sec / 0.1)\n' +
                '    floats_per_iteration = total_floats // iterations\n' +
                '    memory_hog = []\n' +
                '    for _ in range(iterations):\n' +
                '        memory_hog.extend([0.0] * floats_per_iteration)\n' +
                '        time.sleep(0.1)\n' +
                'consume_memory(1000, 1)\n',
        },
        expectedResponse: {
            val: 'Memory limit exceeded',
            status: 200,
            error: 1,
        },
    },
    {
        name: 'MLE test 3',
        reqObject: {
            language: 'python',
            script:
                'a = [100]\n' +
                'for i in a:\n' +
                '    a.append(i)\n',
        },
        expectedResponse: {
            val: 'Memory limit exceeded',
            status: 200,
            error: 1,
        },
    },
    {
        name: 'OPEN AI test promptv1',
        reqObject: {
            language: 'promptv1',
            prompt: 'The question is what is 2 plus 2. The answer given is 4.',
        },
        expectedResponse: {
            val: {},
            status: 200,
            error: 0,
        },
    },
    {
        name: 'OPEN AI test promptv2',
        reqObject: {
            language: 'promptv2',
            prompt: 'The question is what is 2 plus 2. The answer given is 4.',
        },
        expectedResponse: {
            val: {},
            status: 200,
            error: 0,
        },
    },
    // Perl test cases
    {
        name: 'perl: hello world',
        reqObject: {
            language: 'perl',
            script: 'print "hello world\\n"',
        },
        expectedResponse: {
            val: 'hello world\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'perl: print stdin',
        reqObject: {
            language: 'perl',
            script: 'while (<STDIN>) { print $_; }',
            stdin: '1 2 3\n4 5 6',
        },
        expectedResponse: {
            val: '1 2 3\n4 5 6',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'perl: handle large input',
        reqObject: {
            language: 'perl',
            script: `
                use strict;
                use warnings;
                my $count = 0;
                while (my $line = <STDIN>) {
                    $count++;
                }
                print "Lines: $count\\n";
            `,
            stdin: '1\n'.repeat(1000), // Reduced to 1000 lines for practical testing
        },
        expectedResponse: {
            val: 'Lines: 1000\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'perl: error handling',
        reqObject: {
            language: 'perl',
            script: 'die "Intentional error\\n";',
        },
        expectedResponse: {
            val: 'Intentional error',
            status: 200,
            error: 1,
        },
    },

    // TypeScript test cases
    {
        name: 'typescript: hello world',
        reqObject: {
            language: 'typescript',
            script: 'console.log("hello world");',
        },
        expectedResponse: {
            val: 'hello world\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'typescript: type checking',
        reqObject: {
            language: 'typescript',
            script: `
                function greet(name: string): string {
                    return \`Hello, \${name}!\`;
                }
                console.log(greet("TypeScript"));
            `,
        },
        expectedResponse: {
            val: 'Hello, TypeScript!\n',
            status: 200,
            error: 0,
        },
    },

    // Rust test cases
    {
        name: 'rust: hello world',
        reqObject: {
            language: 'rust',
            script: 'fn main() { println!("hello world"); }',
        },
        expectedResponse: {
            val: 'hello world\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'rust: print stdin',
        reqObject: {
            language: 'rust',
            script: `
                use std::io::{self, BufRead};

                fn main() {
                    let stdin = io::stdin();
                    for line in stdin.lock().lines() {
                        println!("{}", line.unwrap());
                    }
                }
            `,
            stdin: '1 2 3\n4 5 6',
        },
        expectedResponse: {
            val: '1 2 3\n4 5 6\n',
            status: 200,
            error: 0,
        },
    },
]

module.exports = { testCases }
