# Difference between process and thread

1. Processes can be considered independent applications, threads cannot.

2. **Resources**: A process is the smallest unit for CPU resource allocation and can run dependently. A thread is a smallest unit of CPU scheduling and exists within a process, and there can be multiple threads in a process.

3. **Communication**: Threads can directly share resources within the same process, whereas processes require inter-process communication.

4. Scheduling: The overhead of process switching is greater than that of thread switching. Thread is the basic unit of CPU scheduling. thread switching will not cause process switching, but when a thread in a process switches to a thread in another process, it will cause process switching.

5. System Overhead: When creating or terminating processes, the system needs to allocate or deallocate resources such as memory, I/O, etc. The overhead is significantly higher compared to creating or terminating threads. Similarly, during process switching, there is a need to save the CPU environment of the currently executing process, including various states, and set up the new scheduled process. In contrast, thread switching involves saving and setting a small amount of register content, resulting in lower overhead.
