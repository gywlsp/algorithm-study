import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Q1916_2 {
    static int N, M;
    static ArrayList<ArrayList<int[]>> graph;
    static int[] minDistMemo;
    static boolean[] visited;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        N = Integer.parseInt(br.readLine());
        M = Integer.parseInt(br.readLine());

        graph = new ArrayList<>();
        for (int i = 0; i < N; i++) {
            graph.add(new ArrayList<>());
        }
        minDistMemo = new int[N];
        Arrays.fill(minDistMemo, Integer.MAX_VALUE);
        visited = new boolean[N];

        int u, v, w;
        for (int i = 0; i < M; i++) {
            st = new StringTokenizer(br.readLine());
            u = Integer.parseInt(st.nextToken());
            v = Integer.parseInt(st.nextToken());
            w = Integer.parseInt(st.nextToken());
            int[] edge = {v-1, w};
            graph.get(u-1).add(edge);
        }

        st = new StringTokenizer(br.readLine());
        int start = Integer.parseInt(st.nextToken());
        int end = Integer.parseInt(st.nextToken());

        dijkstra(start-1);
        System.out.print(minDistMemo[end-1]);
        br.close();
    }

    public static void dijkstra(int start) {
        minDistMemo[start] = 0;

        while(true){
            int closestV=0, closestW = Integer.MAX_VALUE;

            for(int i=0; i<N; i++){
                if(visited[i]){
                    continue;
                }
                if(minDistMemo[i]<closestW){
                    closestW = minDistMemo[i];
                    closestV = i;
                }
            }

            if(closestW==Integer.MAX_VALUE){
                break;
            }

            visited[closestV]=true;
            int v, w;
            for(int[] edge: graph.get(closestV)){
                v = edge[0];
                w = edge[1];
                if(visited[v]){
                    continue;
                }
                minDistMemo[v] = Math.min(minDistMemo[v], minDistMemo[closestV]+w);
            }
        }
    }
}
